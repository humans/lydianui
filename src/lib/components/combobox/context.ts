import { setContext as SvelteSetContext, getContext as SvelteGetContext } from 'svelte';
import type { ComboboxContext } from './types';

const ComboboxContextKey: unique symbol = Symbol();

export const setContext = (context: ComboboxContext) =>
	SvelteSetContext<ComboboxContext>(ComboboxContextKey, context);

export const getContext = () => SvelteGetContext<ComboboxContext>(ComboboxContextKey);
