<script lang="ts">
	import { usePopover } from '$lib/components/popover/store';
	import { clickOutside } from '$lib/actions/use-click-outside';
	import { BehaviorType } from './types';
	import { setContext } from './context';

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
	}

	setContext({
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
	<slot state={$popover} />
</div>
