import { defineContext } from '$lib/helpers/define-context';
import type { HandleStore } from '$lib/handles';
import type { DialogStore } from './types';

const DialogContextKey = Symbol();

type DialogContext = {
	dialog: DialogStore;
	handles: HandleStore;
};

export const { getContext, setContext } = defineContext<DialogContext>(DialogContextKey);
