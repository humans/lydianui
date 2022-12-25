import { queryFocusableElements } from '../focus';

type FocusableElement = HTMLElement | null;

export const focusTrap = (element: HTMLElement) => {
	// const focusable = queryFocusableElements(element);
	//
	// const first: FocusableElement = focusable[0];
	//
	// const last: FocusableElement = focusable[focusable.length - 1];
	//
	// const handleKeydown = (event: any) => {
	// 	if (event.key !== 'Tab') {
	// 		return;
	// 	}
	//
	// 	if (first instanceof Element) {
	// 		return;
	// 	}
	//
	// 	if (last instanceof Element) {
	// 		return;
	// 	}
	//
	// 	if (event.shiftKey) {
	// 		if (document.activeElement === first) {
	// 			last?.focus();
	// 			event.preventDefault();
	// 		}
	// 	} else {
	// 		if (document.activeElement === last) {
	// 			first?.focus();
	// 			event.preventDefault();
	// 		}
	// 	}
	// };
	//
	// element.addEventListener('keydown', handleKeydown, true);
};
