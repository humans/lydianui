export default (popover) => ({
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

		if (popover.element.contains(event.relatedTarget)) {
			return;
		}

		popover.close();
	},

	handleClickOutside() {},

	handleToggle() {}
});
