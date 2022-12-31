import type { Readable } from 'svelte/store';
import type { CursorState, CursorActions } from './types';
import { get } from 'svelte/store';
import { defineStore } from '$lib/store';

type TraversableItem = {
	[key: string]: any;
};

export const defineCursor = <T extends TraversableItem>(
	items: Readable<T[]>,
	uniqueBy: keyof T
) => {
	const $items = () => get(items);

	return defineStore<CursorState<T>, CursorActions<T>>({
		state: {
			item: null
		},
		actions: {
			$position({ item }) {
				if (!item) {
					return -1;
				}

				return $items().findIndex(($item) => $item[uniqueBy] === item[uniqueBy]);
			},

			on({ item }, $item: T) {
				return item && item[uniqueBy] === $item[uniqueBy];
			},

			select(state, item: T) {
				this.$change({ item });
			},

			reset() {
				if ($items().length > 0) {
					this.$change({ item: $items()[0] });
				} else {
					this.$change({ item: null });
				}
			},

			next() {
				const next = (this.$position() + 1) % $items().length;

				this.$change({ item: $items()[next] });
			},

			previous() {
				const previous = (this.$position() + $items().length - 1) % $items().length;

				this.$change({ item: $items()[previous] });
			}
		}
	});
};
