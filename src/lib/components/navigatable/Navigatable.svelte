<script lang="ts">
	import { defineCursor } from '$lib/cursor';
	import { createEventDispatcher } from 'svelte';
	import type { Readable } from 'svelte/store';

	export let items: Readable<any>;
	export let key: string;

	const cursor = defineCursor(items, key);

	const dispatch = createEventDispatcher();

	function handleKeydown(event) {
		if (event.key === 'ArrowDown') {
			event.preventDefault();

			cursor.next();
		}

		if (event.key === 'ArrowUp') {
			event.preventDefault();

			cursor.previous();
		}

		if (event.key === 'Enter' && $cursor.item) {
			event.preventDefault();

			dispatch('select', { item: $cursor.item });
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<slot active={$cursor.item} />
