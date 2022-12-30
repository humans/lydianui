<script lang="ts">
	import { getContext } from './context';
	import { onDestroy, onMount } from 'svelte';
	import { reject } from '$lib/helpers/collections';
	import { derived } from 'svelte/store';

	export let as = 'div';
	export let disabled = false;

	const { dropdown, cursor, handles } = getContext();

	let id = handles.new('item');

	const item = {
		$id: id,
		$element: null,
		disabled
	};

	onMount(() => {
		$dropdown.items = [...$dropdown.items, item];
		cursor.reset();
	});

	onDestroy(() => {
		$dropdown.items = reject($dropdown.items, '$id', id);
		cursor.reset();
	});

	const active = derived(cursor, ({ item }) => {
		return item?.$id === id;
	});

	function handleMouseover() {
		if (disabled) {
			return;
		}

		cursor.select(item);
	}
</script>

<svelte:element
	this={as}
	{...$$restProps}
	on:mouseover={handleMouseover}
	on:click|preventDefault={() => dropdown.select(item)}
	on:select
	{id}
	bind:this={item.$element}
	tabindex="-1"
	role="menuitem"
	aria-disabled={disabled ? 'true' : 'false'}
>
	<slot active={$active} />
</svelte:element>
