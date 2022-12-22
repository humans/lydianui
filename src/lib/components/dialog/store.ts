import { defineStore } from '$lib/store';

type DialogConfig = {
	open: boolean;
};

type DialogState = {
	open: boolean;
};

type DialogActions = {};

export const useStore = (config: DialogConfig) =>
	defineStore<DialogState, DialogActions>({
		state: {
			...config
		},
		actions: {}
	});
