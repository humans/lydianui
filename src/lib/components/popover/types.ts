export type Behavior = {
	handleTriggerMouseEnter: () => void;
	handleMouseLeave: () => void;
	handleFocusout: (event: FocusEvent) => void;
	handleClickOutside: () => void;
	handleToggle: () => void;
};

export enum BehaviorType {
	Press = 'press',
	Hover = 'hover'
}

export type PopoverState = {
	isOpen: boolean;
	element: HTMLElement | null;
};

export type PopoverActions = {
	open: () => void;
	close: () => void;
};

export type BehaviorFactory = (store: PopoverState & PopoverActions) => Behavior;
