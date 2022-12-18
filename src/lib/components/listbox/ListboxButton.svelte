<script lang="ts">
	import { getContext } from 'svelte';
	import { ListboxContextKey } from './Listbox.svelte';

	const { listbox } = getContext(ListboxContextKey);
</script>

<button
	type="button"
	{...$$restProps}
	on:click|preventDefault={listbox.toggle}
	bind:this={$listbox.$trigger}
>
	<slot />
</button>
