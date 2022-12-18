import { defineStore } from '../..//store';

export type ListboxConfig = {
	multiple: boolean;
	value: any;
};

export type ListboxOption = {
	key: any;
	value: any;
	disabled: boolean;
	$element: HTMLElement | null;
};

export type ListboxState = ListboxConfig & {
	open: boolean;
	options: ListboxOption[];

	$trigger: HTMLElement | null;
	$options: HTMLElement | null;
};

export type ListboxActions = {
	selected: (value: any) => boolean;
	select: (value: any) => void;
	open: () => void;
	close: () => void;
	toggle: () => void;
	$selectMany: (value: any) => void;
	$selectOne: (value: any) => void;
};

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
						value: value.filter((v) => v !== $value)
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
