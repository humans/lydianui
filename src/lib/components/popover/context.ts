import { useContext } from '$lib/helpers/use-context';
import type { PopoverStore } from '$lib/components/popover/types';

type PopoverContext = {
	popover: PopoverStore;
};

export const PopoverContextKey = Symbol();

const { getContext, setContext } = useContext<PopoverContext>(PopoverContextKey);

export { getContext, setContext };
