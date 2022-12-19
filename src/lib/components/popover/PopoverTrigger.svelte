<script>
	import { getContext } from './context';

	const { popover } = getContext();
</script>

<span {...$$restProps} on:mouseenter={popover.handleMouseEnter}>
	<slot />
</span>
