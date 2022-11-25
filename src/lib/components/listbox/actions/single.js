export default (state) => ({
	select(option) {
		state.value = option;
		state.close();
	},

	isSelected(value) {
		return state.value === value;
	}
});
