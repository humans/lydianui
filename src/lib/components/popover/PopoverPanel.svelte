<script>
	import { getContext } from 'svelte';
	import { PopoverContextKey } from './Popover.svelte';

	const popover = getContext(PopoverContextKey);
</script>

{#if $popover.isOpen}
	<div {...$$restProps}>
		<slot />
	</div>
{/if}
