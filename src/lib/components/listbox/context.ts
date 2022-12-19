import type { ListboxContext } from '$lib/components/listbox/types';
import { useContext } from '$lib/helpers/use-context';

export const ListboxContextKey = Symbol();

const { getContext, setContext } = useContext<ListboxContext>(ListboxContextKey);

export { getContext, setContext };
