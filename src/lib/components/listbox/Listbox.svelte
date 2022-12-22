<script lang="ts">
	import { derived } from 'svelte/store';
	import { useCursor } from '$lib/cursor';
	import { clickOutside } from '$lib/actions/use-click-outside';
	import { useListbox } from './store';
	import { setContext } from './context';
	import { useHandles } from './handles';

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

	const handles = useHandles();

	function handleClickOutside() {
		if (!$listbox.open) {
			return;
		}

		listbox.close();
	}

	setContext({
		cursor,
		listbox,
		handles
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
