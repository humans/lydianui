import { defineCursor } from '$lib/cursor';
import { derived } from 'svelte/store';

export const useCursor = (dropdown) =>
	defineCursor(
		derived(dropdown, ($dropdown) => {
			return $dropdown.items.filter((item) => !item.disabled);
		}),
		'$id'
	);
