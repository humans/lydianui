import { defineContext } from '$lib/helpers/define-context';

const { getContext, setContext } = defineContext(Symbol('NavigationList'));

export { getContext, setContext };
