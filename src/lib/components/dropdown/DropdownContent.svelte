<script lang="ts">
	import { getContext } from './context';
	import { scrollContainerTo } from '$lib/helpers/navigation';

	export let as = 'div';

	const { cursor, dropdown, handles } = getContext();

	function handleEnter(event) {
		event.preventDefault();

		dropdown.select($cursor.item);
	}

	function handleNavigationDown(event) {
		event.preventDefault();

		cursor.next();

		scrollContainerTo($dropdown.$content, $cursor.item?.$element);
	}

	function handleNavigationUp(event) {
		event.preventDefault();

		cursor.previous();

		scrollContainerTo($dropdown.$content, $cursor.item?.$element);
	}

	function handleKeydown(event) {
		if (!$dropdown.open) {
			return;
		}

		switch (event.key) {
			case 'Escape':
				return dropdown.close();

			case 'ArrowUp':
				return handleNavigationUp(event);

			case 'ArrowDown':
				return handleNavigationDown(event);

			case 'Enter':
				return handleEnter(event);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $dropdown.open}
	<svelte:element
		this={as}
		{...$$restProps}
		bind:this={$dropdown.$content}
		id={handles.firstOrNew('content')}
		role="menu"
		aria-orientation="vertical"
		aria-labelledby={$handles.find('trigger')}
	>
		<slot />
	</svelte:element>
{/if}
