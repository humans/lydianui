<script>
	import { PopoverContextKey } from './Popover.svelte';
	import { getContext } from 'svelte';

	const popover = getContext(PopoverContextKey);
</script>

<button
	type="button"
	{...$$restProps}
	bind:this={$popover.trigger}
	on:mouseenter={$popover.behavior.handleTriggerMouseEnter}
	on:click|preventDefault={$popover.behavior.handleToggle}
	on:focus={$popover.behavior.handleTriggerFocus}
>
	<slot />
</button>
