import { defineCursor } from '$lib/cursor';
import type { ListboxStore } from '$lib/components/listbox/types';
import { derived } from 'svelte/store';

export const useCursor = (listbox: ListboxStore) =>
	defineCursor(
		derived(listbox, (listbox) => {
			return listbox.options.filter((option) => !option.disabled);
		}),
		'key'
	);
