import { PopoverContextKey } from './context';
import { defineStore } from '$lib/store';
import type { PopoverActions, PopoverBehavior, PopoverState } from './types';
import { BehaviorType } from './types';

type PopoverOptions = {
	behavior: BehaviorType;
};

export const usePopover = (options: PopoverOptions) =>
	defineStore<PopoverState, PopoverActions & PopoverBehavior>({
		state: {
			key: PopoverContextKey,
			open: false,

			$root: null,
			$panel: null,
			$trigger: null,

			focusable: {
				$first: null,
				$last: null
			},

			...options
		},

		actions: {
			open() {
				this.$change({ open: true });
			},

			close() {
				this.$change({ open: false });
			},

			toggle({ open }) {
				if (open) {
					this.close();
				} else {
					this.open();
				}
			},

			handleClickOutside() {
				this.close();
			},

			handleClick({ behavior }) {
				if (behavior === BehaviorType.Hover) {
					return;
				}

				this.toggle();
			},

			handleMouseEnter({ behavior }) {
				if (behavior === BehaviorType.Press) {
					return;
				}

				this.open();
			},

			handleMouseLeave({ behavior }) {
				if (behavior === BehaviorType.Press) {
					return;
				}

				this.close();
			},

			handleFocusOut({ $panel, open, behavior, $root }, event) {
				if (behavior === BehaviorType.Press) {
					return;
				}

				if (!open) {
					return;
				}

				if (!event.relatedTarget) {
					return;
				}

				if ($root?.contains(event.relatedTarget)) {
					return;
				}

				if ($panel?.contains(event.relatedTarget)) {
					return;
				}

				this.close();
			},

			handleFocus({ behavior }) {
				if (behavior === BehaviorType.Press) {
					return;
				}

				this.toggle();
			}
		}
	});
