export enum BehaviorType {
	Press = 'press',
	Hover = 'hover'
}

export type PopoverState = {
	isOpen: boolean;
	element: HTMLElement | null;

	behavior: BehaviorType;
	open: boolean;

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
};

export type PopoverBehaviorFactory = (store: PopoverState & PopoverActions) => PopoverBehavior;
