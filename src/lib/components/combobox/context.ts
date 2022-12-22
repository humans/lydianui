import type { ComboboxContext } from './types';
import { defineContext } from '$lib/helpers/define-context';

export const ComboboxContextKey: unique symbol = Symbol();

const { setContext, getContext } = defineContext<ComboboxContext>(ComboboxContextKey);

export { setContext, getContext };
