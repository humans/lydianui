import type { PopoverBehaviorFactory } from '../types';

export const press: PopoverBehaviorFactory = (popover) => ({
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
