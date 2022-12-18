export enum BehaviorType {
	Press = 'press',
	Hover = 'hover'
}

export type PopoverState = {
	readonly key: unique symbol;
	behavior: BehaviorType;
	open: boolean;
	group?: PopoverGroupState;

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
};

export type PopoverGroupState = {
	popovers: Array<PopoverState>;
};

export type PopoverBehaviorFactory = (store: PopoverState & PopoverActions) => PopoverBehavior;
