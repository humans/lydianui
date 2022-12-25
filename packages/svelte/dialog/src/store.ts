import { defineStore } from '@lydianui/svelte-define-store';
import type { DialogActions, DialogState } from './types';

type DialogConfig = {
	open: boolean;
};

export const useStore = (config: DialogConfig) =>
	defineStore<DialogState, DialogActions>({
		state: {
			...config
		},
		actions: {
			close() {
				this.$change({ open: false });
			}
		}
	});
