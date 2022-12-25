import { defineContext } from '@lydianui/svelte-define-context';
import type { HandleStore } from '@lydianui/svelte-define-handles';
import type { DialogStore } from './types';

const DialogContextKey = Symbol();

type DialogContext = {
	dialog: DialogStore;
	handles: HandleStore;
};

export const { getContext, setContext } = defineContext<DialogContext>(DialogContextKey);
