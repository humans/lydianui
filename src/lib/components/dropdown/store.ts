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
			open() {
				this.$change({ open: true });
			},

			close() {
				this.$change({ open: false });
			},

			toggle({ open }) {
				this.$change({ open: !open });
			},

			select(_, item) {
				item.$element.dispatchEvent(new CustomEvent('select'));
			}
		}
	});
