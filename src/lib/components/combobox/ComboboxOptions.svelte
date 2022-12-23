<script lang="ts">
	import { getContext } from './context';
	import { onMount } from 'svelte';

	const { combobox, handles } = getContext();

	onMount(() => {
		$combobox.$options.dispatchEvent(new CustomEvent('mount'));
	});
</script>

{#if $combobox.open}
	<ul
		id={handles.firstOrNew('options')}
		role="listbox"
		{...$$restProps}
		on:mount
		on:open
		on:close
		bind:this={$combobox.$options}
	>
		<slot />
	</ul>
{/if}
