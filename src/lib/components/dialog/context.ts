import { defineContext } from '$lib/helpers/define-context';

const DialogContextKey = Symbol();

export const { getContext, setContext } = defineContext(DialogContextKey);
