import type { ComboboxContext } from './types';
import { useContext } from '$lib/helpers/use-context';

export const ComboboxContextKey: unique symbol = Symbol();

const { setContext, getContext } = useContext<ComboboxContext>(ComboboxContextKey);

export { setContext, getContext };
