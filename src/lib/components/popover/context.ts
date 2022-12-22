import { defineContext } from '$lib/helpers/define-context';
import type { PopoverStore } from '$lib/components/popover/types';

type PopoverContext = {
	popover: PopoverStore;
};

export const PopoverContextKey = Symbol();

const { getContext, setContext } = defineContext<PopoverContext>(PopoverContextKey);

export { getContext, setContext };
