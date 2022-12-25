import { getContext as SvelteGetContext, setContext as SvelteSetContext } from 'svelte';

export const defineContext = <T>(key: any) => ({
	getContext: (): T => SvelteGetContext<T>(key),

	setContext: (attributes: T): T => SvelteSetContext<T>(key, attributes)
});
