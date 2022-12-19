import { useContext } from '$lib/helpers/use-context';

export const DialogContextKey = Symbol();

const { getContext, setContext } = useContext(DialogContextKey);

export { getContext, setContext };
