import type { ComboboxState, ComboboxConfig, ComboboxActions } from './types';
import { defineStore } from '$lib/store';
import { tick } from 'svelte';

export const useCombobox = (config: ComboboxConfig) =>
	defineStore<ComboboxState, ComboboxActions>({
		state: {
			open: false,
			options: [],

			$group: null,
			$root: null,
			$input: null,
			$options: null,

			...config
		},

		actions: {
			select($state, value) {
				if (value?.callback) {
					value.callback(this);
				} else if ($state.multiple) {
					this._selectMultiple(value);
				} else {
					this._selectOne(value);
				}

				$state.$root?.dispatchEvent(new CustomEvent('input', value));
			},

			selected($state, value): boolean {
				if ($state.multiple) {
					return $state.value.includes(value);
				} else {
					return $state.value === value;
				}
			},

			focus({ $input }) {
				$input?.focus({ preventScroll: true });
			},

			async open({ $root, $options }) {
				this.$change({ open: true });

				await tick();

				$root?.dispatchEvent(new CustomEvent('open'));
				$options?.dispatchEvent(new CustomEvent('open'));
			},

			async close({ $root, $options }) {
				this.$change({ open: false });

				await tick();

				$root?.dispatchEvent(new CustomEvent('close'));
				$options?.dispatchEvent(new CustomEvent('close'));
			},

			toggle({ open }) {
				if (open) {
					this.close();
				} else {
					this.open();
				}
			},

			// $internal

			_selectOne($state, value) {
				this.$change({ value: value });

				this.close();
			},

			_addValue($state, value) {
				this.$change({ value: [...$state.value, value] });
			},

			_removeValue($state, value) {
				this.$change({
					value: $state.value.filter(($value: any) => $value === value)
				});
			},

			_selectMultiple($state, value) {
				if ($state.value.includes(value)) {
					this._removeValue(value);
				} else {
					this._addValue(value);
				}

				this.close();
			}
		}
	});
