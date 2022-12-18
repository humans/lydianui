<script context="module">
	export const ListboxContextKey = Symbol();
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { derived } from 'svelte/store';
	import { clickOutside } from '../../actions/use-click-outside.js';
	import { useListbox } from './store';
	import { useCursor } from '../../cursor';

	export let multiple = false;
	export let value;

	const listbox = useListbox({
		multiple,
		value
	});

	listbox.subscribe((listbox) => {
		if (listbox.value !== value) {
			value = listbox.value;
		}
	});

	const cursor = useCursor(
		derived(listbox, (listbox) => {
			return listbox.options.filter((option) => !option.disabled);
		}),
		'key'
	);

	function handleClickOutside() {
		if (!$listbox.open) {
			return;
		}

		listbox.close();
	}

	setContext(ListboxContextKey, {
		cursor,
		listbox
	});

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			listbox.close();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div {...$$restProps} use:clickOutside on:click-outside={handleClickOutside}>
	<slot state={$listbox} {listbox} />
</div>
