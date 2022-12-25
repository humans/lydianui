import { defineContext } from '@lydianui/utilities/context';
import type { HandleStore } from 'packages/svelte/handles';
import type { DialogStore } from './types';

const DialogContextKey = Symbol();

type DialogContext = {
	dialog: DialogStore;
	handles: HandleStore;
};

export const { getContext, setContext } = defineContext<DialogContext>(DialogContextKey);
