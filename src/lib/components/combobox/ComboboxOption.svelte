<script lang="ts">
	import type { ComboboxOption } from './types';
	import { onDestroy, onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { reject } from '$lib/helpers/collections';
	import { getContext } from './context';

	export let key: any;
	export let value: any = null;
	export let disabled: boolean = false;

	const { combobox, cursor } = getContext();

	const option: ComboboxOption = {
		key,
		value,
		disabled,
		$element: null
	};

	function handleClick() {
		if (disabled) {
			return;
		}

		combobox.select(value);
	}

	const active = derived(cursor, ({ item }) => {
		return item?.key === key;
	});

	function handleMouseenter() {
		if (disabled) {
			return;
		}

		cursor.select(option);
	}

	function findOptionIndex(option) {
		return Array.from($combobox.$options?.children).findIndex(
			(element) => element === option.$element
		);
	}

	onMount(() => {
		$combobox.options = [...$combobox.options, option].sort(
			(a, b) => findOptionIndex(a) - findOptionIndex(b)
		);
	});

	onDestroy(() => {
		$combobox.options = reject($combobox.options, 'key', key).sort(
			(a, b) => findOptionIndex(a) - findOptionIndex(b)
		);
	});
</script>

<li
	role="option"
	{...$$restProps}
	on:mouseenter={handleMouseenter}
	on:click|preventDefault={handleClick}
	bind:this={option.$element}
	aria-disabled={disabled ? 'true' : 'false'}
	aria-selected={combobox.selected(value) ? 'true' : 'false'}
>
	<slot active={$active} selected={combobox.selected(value)} />
</li>
