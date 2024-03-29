import type { Store } from '$lib/store/types';
import type { CursorStore } from '$lib/cursor/types';
import type { HandleStore } from '$lib/handles';

export type ComboboxOption = {
	key: any;
	value: any;
	disabled: boolean;
	$element: HTMLElement | null;
};

export type ComboboxConfig = {
	multiple: boolean;
	value: any;
};

export type ComboboxState = ComboboxConfig & {
	open: boolean;
	options: ComboboxOption[];
	$group: HTMLElement | null;
	$root: HTMLElement | null;
	$input: HTMLInputElement | null;
	$options: HTMLElement | null;
};

type ComboboxInternalActions = {
	_selectOne: (value: any) => void;
	_selectMultiple: (value: any) => void;
	_addValue: (value: any) => void;
	_removeValue: (value: any) => void;
};

type ComboboxPublicActions = {
	select: (value: any) => void;
	selected: (value: any) => boolean;
	focus: () => void;
	open: () => void;
	close: () => void;
	toggle: () => void;
};

export type ComboboxActions = ComboboxInternalActions & ComboboxPublicActions;

export type ComboboxStore = Store<ComboboxState, ComboboxActions>;

export type ComboboxContext = {
	combobox: ComboboxStore;
	cursor: CursorStore<ComboboxOption>;
	handles: HandleStore;
};
