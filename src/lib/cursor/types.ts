import type { Writable } from 'svelte/store';

export type CursorStore<T> = Writable<CursorState<T>> & CursorActions<T>;

export type CursorState<T> = {
	item: T | null;
};

export type CursorActions<T> = {
	$position: () => number;
	next: () => void;
	previous: () => void;
	on: (item: T) => boolean;
	select: (item: T) => void;
	reset: () => void;
};
