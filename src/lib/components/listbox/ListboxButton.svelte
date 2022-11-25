<script>
	import { getContext } from 'svelte';
	import { ListboxContextKey } from './Listbox.svelte';

	const { state } = getContext(ListboxContextKey);
</script>

<button
	type="button"
	{...$$restProps}
	on:click|preventDefault={$state.open}
	bind:this={$state.trigger}
>
	<slot />
</button>
