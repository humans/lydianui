import { getContext as SvelteGetContext, setContext as SvelteSetContext } from 'svelte';

export const defineContext = <T>(key: any) => ({
	getContext: () => SvelteGetContext<T>(key),

	setContext: (attributes: T) => SvelteSetContext<T>(key, attributes)
});
