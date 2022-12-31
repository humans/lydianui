<script>
	import { derived } from 'svelte/store';
	import { getContext } from './context';
	import { scrollContainerTo } from '$lib/helpers/navigation';

	export let as = 'div';
	export let key;

	let element;

	const { cursor, scrollable, focus } = getContext();

	const active = derived(cursor, ($cursor) => {
		if (!$cursor.item) {
			return false;
		}

		return $cursor.item[$cursor.uniqueBy] === key;
	});

	$: {
		if ($active && focus) {
			scrollContainerTo(scrollable ?? window, element);
		}
	}
</script>

<svelte:element this={as} {...$$restProps} tabindex="-1" bind:this={element}>
	<slot active={$active} />
</svelte:element>
