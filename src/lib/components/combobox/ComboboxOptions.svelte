<script lang="ts">
	import { getContext } from './context';

	const { combobox, handles } = getContext();
</script>

{#if $combobox.open}
	<ul
		id={handles.firstOrNew('options')}
		role="listbox"
		{...$$restProps}
		bind:this={$combobox.$options}
	>
		<slot />
	</ul>
{/if}
