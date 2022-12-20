<script>
	import { onDestroy, onMount } from 'svelte';
	import { createUniqueId } from '$lib/helpers/create-unique-id';
	import { remove } from '$lib/helpers/array';
	import { getContext } from './context';

	export let as = 'p';

	const { aria } = getContext();

	const id = createUniqueId('dialog-description');

	onMount(() => {
		$aria.describedby = [...$aria.describedby, id];
	});

	onDestroy(() => {
		$aria.describedby = remove($aria.describedby, id);
	});
</script>

<svelte:element this={as} {id} {...$$restProps}>
	<slot />
</svelte:element>
