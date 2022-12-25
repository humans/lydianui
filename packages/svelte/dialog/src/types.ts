import type { Writable } from 'svelte/store';

export type DialogState = {
	open: boolean;
};

export type DialogActions = {};

export type DialogStore = Writable<DialogState> | DialogActions;
