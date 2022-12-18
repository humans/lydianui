import type { ListboxContext } from '$lib/components/listbox/types';
export const ListboxContextKey = Symbol();
import { getContext as SvelteGetContext, setContext as SvelteSetContext } from 'svelte';

type ListboxGetContext = () => ListboxContext;
type ListboxSetContext = (attributes: ListboxContext) => void;

export const getContext: ListboxGetContext = () =>
	SvelteGetContext<ListboxContext>(ListboxContextKey);

export const setContext: ListboxSetContext = (attributes) =>
	SvelteSetContext<ListboxContext>(ListboxContextKey, attributes);
