<script lang="ts">
	import { derived, writable } from 'svelte/store';
	import { useCursor } from '$lib/cursor';
	import { clickOutside } from '$lib/actions/use-click-outside';
	import { useListbox } from './store';
	import { setContext } from './context';
	import { useA11y } from '$lib/components/listbox/a11y';

	export let multiple = false;
	export let value;

	const listbox = useListbox({
		multiple,
		value
	});

	$: $listbox.value = value;

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

	const a11y = useA11y({
		name: 'listbox'
	});

	function handleClickOutside() {
		if (!$listbox.open) {
			return;
		}

		listbox.close();
	}

	setContext({
		cursor,
		listbox,
		a11y
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
