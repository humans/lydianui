export default (popover) => ({
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
