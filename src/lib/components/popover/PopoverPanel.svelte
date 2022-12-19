<script>
	import { queryFocusableElements } from '$lib/helpers/focus';
	import { getContext } from './context';

	const { popover } = getContext();

	$: {
		if ($popover.$panel) {
			const focusableElements = queryFocusableElements($popover.$panel);

			$popover.focusable = {
				$first: focusableElements[0],
				$last: focusableElements[focusableElements.length - 1]
			};
		}
	}

	function handleEscape(event) {
		$popover.$trigger.focus();
	}

	function handleBackFromFirstElement(event) {
		$popover.$trigger?.focus({ preventScroll: true });

		event.preventDefault();
		event.stopPropagation();
	}

	function handleForwardFromLastElement(event) {
		$popover.$trigger?.focus({ preventScroll: true });

		event.preventDefault();
		event.stopPropagation();
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			return handleEscape(event);
		}

		if (
			event.shiftKey &&
			event.key === 'Tab' &&
			document.activeElement === $popover.focusable.$first
		) {
			return handleBackFromFirstElement(event);
		}

		if (
			!event.shiftKey &&
			event.key === 'Tab' &&
			document.activeElement === $popover.focusable.$last
		) {
			return handleForwardFromLastElement(event);
		}
	}
</script>

{#if $popover.open}
	<div {...$$restProps} bind:this={$popover.$panel} on:keydown={handleKeydown}>
		<slot />
	</div>
{/if}
