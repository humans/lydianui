import type { BehaviorFactory } from '../types';

export const hover: BehaviorFactory = (popover) => ({
	handleTriggerMouseEnter() {
		if (popover.isOpen) {
			return;
		}

		popover.open();
	},

	handleMouseLeave() {
		if (!popover.isOpen) {
			return;
		}
		popover.close();
	},

	handleTriggerFocus() {
		popover.open();
	},

	handleFocusout(event) {
		if (!popover.isOpen) {
			return;
		}

		if (!event.relatedTarget) {
			return;
		}

		if (popover.element?.contains(event.relatedTarget)) {
			return;
		}

		popover.close();
	},

	handleClickOutside() {},

	handleToggle() {}
});
