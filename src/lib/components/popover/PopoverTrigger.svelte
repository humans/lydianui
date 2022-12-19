<script>
	import { getContext } from 'svelte';
	import { PopoverContextKey } from './Popover.svelte';

	const { popover } = getContext(PopoverContextKey);
</script>

<span {...$$restProps} on:mouseenter={popover.handleMouseEnter}>
	<slot />
</span>
