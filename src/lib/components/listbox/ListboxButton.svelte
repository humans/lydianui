<script lang="ts">
	import { getContext } from './context';

	const { listbox } = getContext();
</script>

<button
	type="button"
	{...$$restProps}
	on:click|preventDefault={listbox.toggle}
	bind:this={$listbox.$trigger}
>
	<slot />
</button>
