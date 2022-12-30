import { defineStore } from '$lib/store';

export const useDropdown = () =>
	defineStore({
		state: {
			open: false,

			items: [],

			$root: null,
			$trigger: null,
			$content: null
		},

		actions: {
			open({ $root }) {
				this.$change({ open: true });

				$root?.dispatchEvent(new CustomEvent('open'));
			},

			close({ $root }) {
				this.$change({ open: false });

				$root?.dispatchEvent(new CustomEvent('close'));
			},

			toggle({ open }) {
				if (open) {
					this.close();
				} else {
					this.open();
				}
			},

			select(_, item) {
				item.$element.dispatchEvent(new CustomEvent('select'));
			}
		}
	});
