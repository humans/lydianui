import { defineStore } from '$lib/store';

import type { ListboxConfig, ListboxState, ListboxActions } from '$lib/components/listbox/types';

export const useListbox = (config: ListboxConfig) =>
	defineStore<ListboxState, ListboxActions>({
		state: {
			open: false,
			options: [],

			$root: null,
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

			select({ multiple, $root }, value) {
				if (multiple) {
					this.$selectMany(value);
				} else {
					this.$selectOne(value);
				}

				$root?.dispatchEvent(
					new CustomEvent('input', {
						detail: { value }
					})
				);
			},

			open({ $root, $options }) {
				this.$change({ open: true });

				$root?.dispatchEvent(new CustomEvent('open'));
				$options?.dispatchEvent(new CustomEvent('open'));
			},

			close({ $root, $options }) {
				this.$change({ open: false });

				$root?.dispatchEvent(new CustomEvent('close'));
				$options?.dispatchEvent(new CustomEvent('open'));
			},

			toggle({ open }) {
				this.$change({ open: !open });
			}
		}
	});
