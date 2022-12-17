<script>
	import { PopoverContextKey } from './Popover.svelte';
	import { getContext } from 'svelte';

	const { popover } = getContext(PopoverContextKey);
</script>

<span {...$$restProps} on:mouseenter={popover.handleMouseEnter}>
	<slot />
</span>
