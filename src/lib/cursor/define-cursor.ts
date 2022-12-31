import type { Readable } from 'svelte/store';
import type { CursorState, CursorActions, CursorConfig } from './types';
import { get } from 'svelte/store';
import { defineStore } from '$lib/store';

type TraversableItem = {
	[key: string]: any;
};

const CursorConfigDefaults = {
	wrap: true
};

export const defineCursor = <T extends TraversableItem>(
	items: Readable<T[]>,
	uniqueBy: keyof T,
	config: CursorConfig = CursorConfigDefaults
) => {
	const $items = () => get(items);

	return defineStore<CursorState<T>, CursorActions<T>>({
		state: {
			item: null,

			...config
		},
		actions: {
			$position({ item }) {
				if (!item) {
					return -1;
				}

				return $items().findIndex(($item) => $item[uniqueBy] === item[uniqueBy]);
			},

			$onFirst() {
				return this.$position() === 0;
			},

			$onLast() {
				return this.$position() + 1 === $items().length;
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

			next({ wrap }) {
				if (!wrap && this.$onLast()) {
					return;
				}

				const next = (this.$position() + 1) % $items().length;

				this.$change({ item: $items()[next] });
			},

			previous({ wrap }) {
				if (!wrap && this.$onFirst()) {
					return;
				}

				const previous = (this.$position() + $items().length - 1) % $items().length;

				this.$change({ item: $items()[previous] });
			}
		}
	});
};
