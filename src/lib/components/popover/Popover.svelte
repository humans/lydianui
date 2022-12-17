<script context="module">
	export const PopoverContextKey = Symbol();
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { clickOutside } from '../../actions/use-click-outside.js';
	import { BehaviorType } from './types';
	import { usePopover } from '$lib/components/popover/store';

	export let behavior: BehaviorType = BehaviorType.Hover;

	const popover = usePopover({ behavior });

	function handleKeydown(event) {
		if (!$popover.open) {
			return;
		}

		if (event.key !== 'Escape') {
			return;
		}

		popover.close();

		if ($popover.$trigger) {
			$popover.$trigger?.focus({ preventScroll: true });
		}
	}

	setContext(PopoverContextKey, {
		popover
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	{...$$restProps}
	bind:this={$popover.$root}
	use:clickOutside
	on:click-outside={popover.handleClickOutside}
	on:focusout={popover.handleFocusOut}
	on:mouseleave={popover.handleMouseLeave}
>
	<slot />
</div>
