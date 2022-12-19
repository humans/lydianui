import type { Writable } from 'svelte/store';

export enum BehaviorType {
	Press = 'press',
	Hover = 'hover'
}

export type PopoverState = {
	readonly key: unique symbol;
	behavior: BehaviorType;
	open: boolean;

	focusable: {
		$first: HTMLElement | null;
		$last: HTMLElement | null;
	};

	$panel: HTMLElement | null;
	$trigger: HTMLElement | null;
	$root: HTMLElement | null;
};

export type PopoverBehavior = {
	handleTriggerMouseEnter: () => void;
	handleMouseLeave: () => void;
	handleFocusout: (event: FocusEvent) => void;
	handleClickOutside: () => void;
	handleToggle: () => void;
};

export type PopoverActions = {
	open: () => void;
	close: () => void;
	toggle: () => void;
};

export type PopoverStore = Writable<PopoverState> & PopoverActions;
