<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { derived } from 'svelte/store';
	import { getContext } from './context';
	import { reject } from '$lib/helpers/collections';

	export let value;
	export let disabled = false;
	export let key;

	let { listbox, cursor, handles } = getContext();

	const option = {
		key,
		value,
		disabled,
		$element: null
	};

	const active = derived(cursor, ({ item }) => {
		return item?.key === key;
	});

	onMount(() => {
		$listbox.options = [...$listbox.options, option];
		cursor.reset();
	});

	onDestroy(() => {
		$listbox.options = reject($listbox.options, 'key', key);
		cursor.reset();
	});

	function handleClick() {
		if (disabled) {
			return;
		}

		listbox.select(value);
	}

	function handleMouseover() {
		if (disabled) {
			return;
		}

		cursor.select(option);
	}
</script>

<li
	on:click|preventDefault={handleClick}
	on:mouseover={handleMouseover}
	bind:this={option.$element}
	role="option"
	tabindex="-1"
	id={handles.new('option')}
	aria-selected={listbox.selected(value) ? 'true' : 'false'}
	aria-disabled={disabled ? 'true' : 'false'}
>
	<slot active={$active} selected={listbox.selected(value)} />
</li>
