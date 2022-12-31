import type { Writable } from 'svelte/store';

export type CursorStore<T> = Writable<CursorState<T>> & CursorActions<T>;

export type CursorState<T> = {
	item: T | null;
	wrap: boolean;
};

export type CursorActions<T> = {
	$position: () => number;
	$onFirst: () => boolean;
	$onLast: () => boolean;
	next: () => void;
	previous: () => void;
	on: (item: T) => boolean;
	select: (item: T) => void;
	reset: () => void;
};

export type CursorConfig = {
	wrap: boolean;
};
