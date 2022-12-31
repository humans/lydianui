<script lang="ts">
	import type { Readable } from 'svelte/store';
	import type { Orientation, Keybindings } from './types';
	import { defineCursor } from '$lib/cursor';
	import { setContext } from './context';
	import { useKeyboard } from './keyboard';

	interface $$Props {
		orientation: Orientation;
		keybindings: Keybindings;
	}

	export let as = 'div';

	export let items: Readable<any>;

	export let key: string;

	export let orientation: Orientation = 'vertical';

	export let wrap = true;

	export let scroll = true;

	export let scrollable;

	export let keybindings: Keybindings;

	const cursor = defineCursor(items, key, {
		wrap
	});

	setContext({
		key,
		scroll,
		scrollable,
		cursor
	});

	const { previous: KEY_PREVIOUS, next: KEY_NEXT } = keybindings ?? useKeyboard(orientation);

	function handleNext(event) {
		event.preventDefault();

		cursor.next();
	}

	function handlePrevious(event) {
		event.preventDefault();

		cursor.previous();
	}

	function handleKeydown(event) {
		if (KEY_PREVIOUS.includes(event.key)) {
			return handlePrevious(event);
		}

		if (KEY_NEXT.includes(event.key)) {
			return handleNext(event);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:element this={as} {...$$restProps}>
	<slot />
</svelte:element>
