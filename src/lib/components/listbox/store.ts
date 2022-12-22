import { defineStore } from '$lib/store';

import type { ListboxConfig, ListboxState, ListboxActions } from '$lib/components/listbox/types';

export const useListbox = (config: ListboxConfig) =>
	defineStore<ListboxState, ListboxActions>({
		state: {
			open: false,
			options: [],

			$trigger: null,
			$options: null,

			...config
		},

		actions: {
			selected({ multiple, value }, $value) {
				if (multiple) {
					return value.includes($value);
				} else {
					return value === $value;
				}
			},

			$selectMany({ value }, $value) {
				if (this.selected($value)) {
					this.$change({
						value: value.filter((v: any) => v !== $value)
					});
				} else {
					this.$change({
						value: [...value, $value]
					});
				}
			},

			$selectOne(_, $value) {
				this.$change({ value: $value });
				this.close();
			},

			select({ multiple }, value) {
				if (multiple) {
					this.$selectMany(value);
				} else {
					this.$selectOne(value);
				}
			},

			open() {
				this.$change({ open: true });
			},

			close() {
				this.$change({ open: false });
			},

			toggle({ open }) {
				this.$change({ open: !open });
			}
		}
	});
