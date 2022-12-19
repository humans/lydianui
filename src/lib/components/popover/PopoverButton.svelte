<script>
	import { getContext } from 'svelte';
	import { PopoverContextKey } from './Popover.svelte';

	const { popover } = getContext(PopoverContextKey);

	function handlePrevious(event) {
		popover.close();
	}

	function handleNext(event) {
		if (!$popover.open) {
			return;
		}

		$popover.focusable.$first.focus({ preventScroll: true });

		event.preventDefault();
	}

	function handleKeydown(event) {
		if (event.shiftKey && event.key === 'Tab') {
			return handlePrevious(event);
		}

		if (event.key === 'Tab') {
			return handleNext(event);
		}
	}
</script>

<button
	type="button"
	{...$$restProps}
	bind:this={$popover.$trigger}
	on:mouseenter={popover.handleMouseEnter}
	on:click|preventDefault={popover.handleClick}
	on:focus={popover.handleFocus}
	on:keydown={handleKeydown}
>
	<slot />
</button>
