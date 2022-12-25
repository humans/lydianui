import { defineStore } from '@lydianui/svelte-store';
import type { DialogActions, DialogState } from './types';

type DialogConfig = {
	open: boolean;
};

export const useStore = (config: DialogConfig) =>
	defineStore<DialogState, DialogActions>({
		state: {
			...config
		},
		actions: {}
	});
