<script lang="ts">
	import type { ComboboxState, ComboboxStore } from './types';
	import { clickOutside } from '$lib/actions/use-click-outside';
	import { setContext } from './context';
	import { useCombobox } from './store';
	import { useHandles } from './handles';
	import { useCursor } from './cursor';

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
		[key: string]: any;
	}

	interface $$Events {
		open: CustomEvent;
		close: CustomEvent;
		'click-outside': CustomEvent;
	}

	export let as: string = 'div';
	export let value: any = null;
	export let multiple: boolean = false;

	const combobox = useCombobox({ value, multiple });

	const handles = useHandles();

	const cursor = useCursor(combobox);

	$: $combobox.value = value;

	combobox.subscribe((state) => {
		if (value === state.value) {
			return;
		}

		value = state.value;
	});

	setContext({
		combobox,
		cursor,
		handles
	});
</script>

<svelte:element
	this={as}
	bind:this={$combobox.$root}
	{...$$restProps}
	use:clickOutside
	on:click-outside={combobox.close}
	on:open
	on:close
	on:click-outside
	id={handles.firstOrNew('root')}
>
	<slot {combobox} state={$combobox} />
</svelte:element>
