export default (state) => ({
	select(value) {
		if (this.isSelected(value)) {
			state.value = state.value.filter(($value) => $value !== value);
		} else {
			state.value = [...state.value, value];
		}
	},

	isSelected(value) {
		return state.value.includes(value);
	}
});
