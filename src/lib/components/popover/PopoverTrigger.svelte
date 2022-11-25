<script>
	import { PopoverContextKey } from './Popover.svelte';
	import { getContext } from 'svelte';

	const popover = getContext(PopoverContextKey);
</script>

<span {...$$restProps} on:mouseenter={$popover.behavior.handleTriggerMouseEnter}>
	<slot toggle={$popover.toggle} open={$popover.open} />
</span>
