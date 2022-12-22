<script lang="ts">
	import { clickOutside } from '$lib/actions/use-click-outside';
	import { useListbox } from './store';
	import { setContext } from './context';
	import { useHandles } from './handles';
	import { useCursor } from '$lib/components/listbox/cursor';

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

	const cursor = useCursor(listbox);

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

<div
	{...$$restProps}
	use:clickOutside
	on:click-outside={handleClickOutside}
	on:close
	on:open
	bind:this={$listbox.$root}
	id={handles.firstOrNew('root')}
>
	<slot state={$listbox} {listbox} />
</div>
