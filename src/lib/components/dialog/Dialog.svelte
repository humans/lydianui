<script lang="ts">
	import { writable } from 'svelte/store';
	import { setContext } from './context';
	import { createUniqueId } from '$lib/helpers/create-unique-id';

	interface $$Props {
		as: string;
		open: boolean;
		[key: string]: any;
	}

	export let as = 'div';

	export let open;

	const dialog = writable({
		id: createUniqueId()
	});

	const aria = writable({
		labelledby: null,
		describedby: []
	});

	setContext({
		dialog,
		aria
	});

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			open = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:element
	this={as}
	{...$$restProps}
	role="dialog"
	aria-labelledby={$aria.labelledby}
	aria-describedby={$aria.describedby.join(' ')}
>
	{#if open}
		<slot />
	{/if}
</svelte:element>
