<script lang="ts">
	import { getContext } from './context';

	const { combobox } = getContext();
</script>

{#if $combobox.open}
	<ul role="listbox" {...$$restProps} bind:this={$combobox.$options}>
		<slot />
	</ul>
{/if}
