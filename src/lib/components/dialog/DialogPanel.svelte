<script lang="ts">
	import { clickOutside } from '$lib/actions/use-click-outside';
	import { getContext } from './context';
	import { onDestroy, onMount } from 'svelte';

	interface $$Props {
		as: string;
		[key: string]: any;
	}

	interface $$Events {
		'click-outside': CustomEvent;
	}

	export let as = 'div';

	let element;

	const { handles, dialog } = getContext();

	onMount(() => {
		element?.dispatchEvent(new CustomEvent('open'));
	});

	onDestroy(() => {
		element?.dispatchEvent(new CustomEvent('close'));
	});
</script>

<svelte:element
	this={as}
	{...$$restProps}
	use:clickOutside
	on:click-outside
	id={handles.firstOrNew('panel')}
	bind:this={element}
	on:open
	on:close
>
	<slot />
</svelte:element>
