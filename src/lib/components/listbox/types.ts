import type { CursorStore } from '$lib/cursor';
import type { Store } from '$lib/store';

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

export type ListboxStore = Store<ListboxState, ListboxActions>;

export type ListboxContext = {
	listbox: ListboxStore;
	cursor: CursorStore<ListboxOption>;
};
