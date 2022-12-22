import { defineCursor } from '$lib/cursor';
import type { ComboboxStore } from '$lib/components/combobox/types';
import { derived } from 'svelte/store';

export const useCursor = (combobox: ComboboxStore) =>
	defineCursor(
		derived(combobox, (combobox) => {
			return combobox.options.filter((option) => !option.disabled);
		}),
		'key'
	);
