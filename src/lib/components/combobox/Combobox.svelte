<script lang="ts">
	import type { ComboboxOption, ComboboxState, ComboboxStore } from './types';
	import { derived } from 'svelte/store';
	import { setContext } from './context';
	import { useCombobox } from './store';
	import { useCursor } from '../../cursor';
	import { clickOutside } from '../../actions/use-click-outside.js';

	interface $$Slots {
		default: {
			state: ComboboxState;
			combobox: ComboboxStore;
		};
	}

	interface $$Props {
		as: string;
		value: any;
		multiple: boolean;
	}

	interface $$Events {
		open: CustomEvent;
		close: CustomEvent;
		'click-outside': CustomEvent;
	}

	export let as = 'div';
	export let value = null;
	export let multiple = false;
	export let sort: (a: ComboboxOption, b: ComboboxOption) => any = (a, b) => a.key;

	const combobox = useCombobox({ value, multiple });

	const cursor = useCursor(
		derived(combobox, (combobox) => {
			return combobox.options.filter((option) => !option.disabled);
		}),
		'key'
	);

	$: $combobox.value = value;

	combobox.subscribe((state) => {
		if (value === state.value) {
			return;
		}

		value = state.value;
	});

	setContext({ combobox, cursor });
</script>

<svelte:element
	this={as}
	bind:this={$combobox.$root}
	{...$$restProps}
	use:clickOutside
	on:click-outside={combobox.close}
	on:open={() => cursor.reset()}
	on:open
	on:close
	on:click-outside
>
	<slot {combobox} state={$combobox} />
</svelte:element>
