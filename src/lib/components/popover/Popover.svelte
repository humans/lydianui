<script context="module">
	export const PopoverContextKey = Symbol();
</script>

<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { clickOutside } from '../../actions/use-click-outside.js';
	import { resolveActions } from './actions/index.js';

	export let behavior = 'hover';

	function handleKeydown(event) {
		if (!$popover.isOpen) {
			return;
		}

		if (event.key !== 'Escape') {
			return;
		}

		$popover.close();

		if ($popover.trigger) {
			$popover.trigger.focus({
				preventScroll: true
			});
		}
	}

	function open() {
		$popover.isOpen = true;
	}

	function toggle() {
		$popover.isOpen = !$popover.isOpen;
	}

	function close() {
		$popover.isOpen = false;
	}

	const popover = writable({
		key: PopoverContextKey,

		isOpen: false,

		trigger: null,

		element: null,

		behavior: null,

		open,

		toggle,

		close
	});

	$popover.behavior = resolveActions(behavior)($popover);

	setContext(PopoverContextKey, popover);
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	{...$$restProps}
	bind:this={$popover.element}
	use:clickOutside
	on:click-outside={$popover.behavior.handleClickOutside}
	on:focusout={$popover.behavior.handleFocusout}
	on:mouseleave={$popover.behavior.handleMouseLeave}
>
	<slot />
</div>
