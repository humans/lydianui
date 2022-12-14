const FocusableElementsSelectors = [
	'a[href]:not([disabled])',
	'button:not([disabled])',
	'textarea:not([disabled])',
	'input[type="text"]:not([disabled])',
	'input[type="radio"]:not([disabled])',
	'input[type="checkbox"]:not([disabled])',
	'select:not([disabled])'
];

export const queryFocusableElements = (element: Element) =>
	element.querySelectorAll(FocusableElementsSelectors.join(', '));
