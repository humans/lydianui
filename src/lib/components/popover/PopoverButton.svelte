<script>
	import { PopoverContextKey } from './Popover.svelte';
	import { getContext } from 'svelte';

	const { popover } = getContext(PopoverContextKey);
</script>

<button
	type="button"
	{...$$restProps}
	bind:this={$popover.$trigger}
	on:mouseenter={popover.handleMouseEnter}
	on:click|preventDefault={popover.handleClick}
	on:focus={popover.handleFocus}
>
	<slot />
</button>
