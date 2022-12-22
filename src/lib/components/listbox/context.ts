import type { ListboxContext } from '$lib/components/listbox/types';
import { defineContext } from '$lib/helpers/define-context';

const ListboxContextKey = Symbol();

const { getContext, setContext } = defineContext<ListboxContext>(ListboxContextKey);

export { getContext, setContext };
