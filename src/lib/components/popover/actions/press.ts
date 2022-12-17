import type { BehaviorFactory } from '../types';

export const press: BehaviorFactory = (popover) => ({
	handleTriggerMouseEnter() {},

	handleMouseLeave() {},

	handleTriggerFocus() {},

	handleFocusout() {},

	handleClickOutside() {
		if (!popover.isOpen) {
			return;
		}

		popover.close();
	},

	handleToggle() {
		if (popover.isOpen) {
			popover.close();
		} else {
			popover.open();
		}
	}
});
