<script lang="ts">
	import type { Readable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { defineCursor } from '$lib/cursor';
	import { setContext } from './context';

	type Orientation = 'vertical' | 'horizontal';

	interface $$Props {
		orientation: Orientation;
	}

	export let as = 'div';

	export let items: Readable<any>;

	export let key: string;

	export let orientation: Orientation = 'vertical';

	export let wrap = true;

	export let scroll = true;

	export let scrollable;

	const cursor = defineCursor(items, key, {
		wrap
	});

	setContext({
		key,
		scroll,
		scrollable,
		cursor
	});

	const dispatch = createEventDispatcher();

	const [KEY_PREVIOUS, KEY_NEXT] = {
		vertical: ['ArrowUp', 'ArrowDown'],
		horizontal: ['ArrowLeft', 'ArrowRight']
	}[orientation];

	function handleNext(event) {
		event.preventDefault();

		cursor.next();
	}

	function handlePrevious(event) {
		event.preventDefault();

		cursor.previous();
	}

	function handleKeydown(event) {
		switch (event.key) {
			case KEY_NEXT:
				return handleNext(event);

			case KEY_PREVIOUS:
				return handlePrevious(event);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:element this={as} {...$$restProps}>
	<slot />
</svelte:element>
