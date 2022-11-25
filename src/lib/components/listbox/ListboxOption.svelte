<script>
	import { onMount, onDestroy, getContext } from 'svelte';
	import { ListboxContextKey } from './Listbox.svelte';

	export let value;
	export let disabled = false;
	export let key;

	let { state, actions } = getContext(ListboxContextKey);

	const option = {
		key,
		value,
		disabled,
		element: null
	};

	onMount(() => {
		$state.options = [...$state.options, option];
	});

	onDestroy(() => {
		$state.options = $state.options.filter((option) => option.key !== key);
	});

	function handleClick() {
		if (disabled) {
			return;
		}

		actions.select(value);
	}

	function handleMouseover() {
		if (disabled) {
			return;
		}

		$state.active = option;
		$state.cursor = $state.options
			.filter((option) => !option.disabled)
			.findIndex((option) => option === option);
	}
</script>

<li
	role="option"
	on:click|preventDefault={handleClick}
	on:mouseover={handleMouseover}
	bind:this={option.element}
>
	<slot active={$state.active?.key === key} selected={actions.isSelected(value)} />
</li>
