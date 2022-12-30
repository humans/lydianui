import { defineContext } from '$lib/helpers/define-context';

const { setContext, getContext } = defineContext(Symbol('LydianDropdown'));

export { setContext, getContext };
