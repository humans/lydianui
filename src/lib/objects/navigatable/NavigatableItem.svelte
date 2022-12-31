<script>
	import { derived } from 'svelte/store';
	import { getContext } from './context';
	import { scrollContainerTo } from '$lib/helpers/navigation';

	export let as = 'div';
	export let item;

	let element;

	const { cursor, scroll, scrollable, focus } = getContext();

	const active = derived(cursor, ($cursor) => {
		if (!$cursor.item) {
			return false;
		}

		return $cursor.item[$cursor.uniqueBy] === item[$cursor.uniqueBy];
	});

	$: {
		if ($active && scroll) {
			scrollContainerTo(scrollable ?? window, element);
		}
	}

	function handleMouseOver(event) {
		cursor.select(item);
	}

	function handleKeydown(event) {
		if ($active && event.key === 'Enter') {
			select();
		}
	}

	function select() {
		element.dispatchEvent(new CustomEvent('select'));
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:element
	this={as}
	{...$$restProps}
	tabindex="-1"
	bind:this={element}
	on:select
	on:click|preventDefault={select}
	on:mouseover={handleMouseOver}
>
	<slot active={$active} />
</svelte:element>
