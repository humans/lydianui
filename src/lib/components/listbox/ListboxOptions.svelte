<script lang="ts">
	import { derived } from 'svelte/store';
	import { debounce } from '$lib/helpers/debounce';
	import { scrollContainerTo } from '$lib/helpers/navigation';
	import { isAlphanumeric } from '$lib/helpers/keyboard';
	import { getContext } from './context';

	const { cursor, listbox, handles } = getContext();

	const availableOptions = derived(listbox, (listbox) => {
		return listbox.options.filter((option) => !option.disabled);
	});

	let query = '';
	function handleSearch(event) {
		event.preventDefault();

		query = `${query}${event.key}`;

		search();
	}

	const search = debounce(() => {
		const option = $availableOptions.find((option) =>
			option.$element.innerText.toLowerCase().startsWith(query.toLowerCase())
		);

		if (!option) {
			query = '';
			return;
		}

		cursor.select(option);

		query = '';
	}, 150);

	function handleEnter(event) {
		event.preventDefault();

		listbox.select($cursor.item.value);
	}

	function handleNavigationDown(event) {
		event.preventDefault();

		cursor.next();

		scrollContainerTo($listbox.$options, $cursor.item?.$element);
	}

	function handleNavigationUp(event) {
		event.preventDefault();

		cursor.previous();

		scrollContainerTo($listbox.$options, $cursor.item?.$element);
	}

	function handleKeydown(event) {
		if (!$listbox.open) {
			return;
		}

		if (isAlphanumeric(event)) {
			return handleSearch(event);
		}

		switch (event.key) {
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

{#if $listbox.open}
	<ul
		tabindex="0"
		{...$$restProps}
		bind:this={$listbox.$options}
		on:close
		on:open
		role="listbox"
		id={handles.firstOrNew('options')}
		aria-orientation="vertical"
		aria-labelledby={$handles.find('button')}
	>
		<slot />
	</ul>
{/if}
