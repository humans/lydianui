<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { derived } from 'svelte/store';
	import { getContext } from './context';
	import { reject } from '../../helpers/collections';

	export let value;
	export let disabled = false;
	export let key;

	let { listbox, cursor } = getContext();

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
	});

	onDestroy(() => {
		$listbox.options = reject($listbox.options, 'key', key);
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
	role="option"
	on:click|preventDefault={handleClick}
	on:mouseover={handleMouseover}
	bind:this={option.$element}
>
	<slot active={$active} selected={listbox.selected(value)} />
</li>
