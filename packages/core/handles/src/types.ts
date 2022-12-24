import type { Writable } from 'svelte/store';

export type HandleElement = {
	name: string;
	id: number;
};

export type HandleState = {
	component: string;
	elements: HandleElement[];
	find: (name: string) => string | null;
	list: (name: string) => string | null;
};

export type HandleActions = {
	$find: (name: string) => HandleElement;
	$create: (name: string) => HandleElement;
	$id: (element: HandleElement) => string;
	firstOrNew: (name: string) => string;
	new: (name: string) => string;
};

export type HandleConfig = {
	component: string;
};

export type HandleStore = Writable<HandleState> & HandleActions;
