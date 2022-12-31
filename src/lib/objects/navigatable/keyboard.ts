import type { Orientation, Keybindings } from './types';

const VerticalKeybindings: Keybindings = {
	previous: ['ArrowUp'],
	next: ['ArrowDown']
};

const HorizontalKeybindings: Keybindings = {
	previous: ['ArrowLeft'],
	next: ['ArrowRight']
};

export const useKeyboard = (orientation: Orientation): Keybindings => {
	switch (orientation) {
		case 'vertical':
			return VerticalKeybindings;

		case 'horizontal':
			return HorizontalKeybindings;
	}
};
