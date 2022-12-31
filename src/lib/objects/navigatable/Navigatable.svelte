<script lang="ts">
	import { defineCursor } from '$lib/cursor';
	import { createEventDispatcher } from 'svelte';
	import type { Readable } from 'svelte/store';

	type Orientation = 'vertical' | 'horizontal';

	interface $$Props {
		orientation: Orientation;
	}

	export let as = 'div';

	export let items: Readable<any>;

	export let key: string;

	export let orientation: Orientation = 'vertical';

	export let wrap = true;

	const cursor = defineCursor(items, key, {
		wrap
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

	function handleEnter(event) {
		event.preventDefault();

		dispatch('select', { item: $cursor.item });
	}

	function handleKeydown(event) {
		switch (event.key) {
			case KEY_NEXT:
				return handleNext(event);

			case KEY_PREVIOUS:
				return handlePrevious(event);

			case 'Enter':
				return handleEnter(event);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:element this={as} {...$$restProps}>
	<slot active={$cursor.item} />
</svelte:element>
