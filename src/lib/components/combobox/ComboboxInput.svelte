<script lang="ts">
	import { onMount } from 'svelte';
	import { getContext } from './context';
	import { scrollContainerTo } from '../../helpers/navigation';

	interface $$Events {
		escape: CustomEvent;
		mount: CustomEvent;
		keydown: WindowEventMap['keydown'];
		input: WindowEventMap['input'];
	}

	export let display = (value) => '';

	const { combobox, cursor } = getContext();

	function handleNavigateDown(event) {
		event.preventDefault();

		cursor.next();

		scrollContainerTo($combobox.$options, $cursor.item?.$element);
	}

	function handleNavigateUp(event) {
		event.preventDefault();

		cursor.previous();

		scrollContainerTo($combobox.$options, $cursor.item?.$element);
	}

	function handleEnter(event) {
		event.preventDefault();

		combobox.select($cursor.item?.value);
	}

	async function handleKeydown(event) {
		if (event.key === 'Escape') {
			event.preventDefault();

			$combobox.$input?.dispatchEvent(new CustomEvent('escape', { detail: combobox }));

			return;
		}

		if (!$combobox.open) {
			combobox.open();
		}

		switch (event.key) {
			case 'ArrowDown':
				return handleNavigateDown(event);

			case 'ArrowUp':
				return handleNavigateUp(event);

			case 'Enter':
				return handleEnter(event);

			default:
				cursor.reset();
		}
	}

	let value: any;

	$: value = $combobox.value ? display($combobox.value) : '';

	onMount(() => {
		$combobox.$input?.dispatchEvent(new CustomEvent('mount'));
	});
</script>

<input
	bind:this={$combobox.$input}
	type="text"
	role="combobox"
	{...$$restProps}
	on:escape
	on:mount
	on:keydown
	on:input
	on:keydown={handleKeydown}
	on:focusin={combobox.open}
	on:click={combobox.open}
	{value}
/>
