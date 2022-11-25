<script context="module">
	export const ListboxContextKey = Symbol();
</script>

<script>
	import { tick, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { clickOutside } from '../../actions/use-click-outside.js';
	import { resolveActions } from './actions/index.js';

	export let multiple = false;
	export let value;

	function close() {
		$state.isOpen = false;
		$state.cursor = 0;
		$state.active = null;

		if ($state.trigger) {
			$state.trigger.focus({ preventScroll: true });
		}
	}

	function handleClickOutside() {
		if (!$state.isOpen) {
			return;
		}

		close();
	}

	async function open() {
		$state.isOpen = true;

		await tick();

		if ($state.options.length > 0) {
			$state.active = $state.options[0];
		}
	}

	const state = writable({
		isOpen: false,

		cursor: 0,

		active: null,

		value,

		close,

		open,

		trigger: null,

		options: []
	});

	const actions = resolveActions(multiple ? 'multiple' : 'single')($state);

	setContext(ListboxContextKey, {
		state,
		actions: {
			...actions,

			select(option) {
				actions.select(option);

				value = $state.value;
			}
		}
	});

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			$state.close();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div {...$$restProps} use:clickOutside on:click-outside={handleClickOutside}>
	<slot />
</div>
