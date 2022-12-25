export const isAlphanumeric = (event: KeyboardEvent) =>
	(event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90);
