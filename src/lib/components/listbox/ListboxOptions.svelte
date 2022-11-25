<script>
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { ListboxContextKey } from './Listbox.svelte';

	const { state, actions } = getContext(ListboxContextKey);

	let list = writable({
		element: null
	});

	$: availableOptions = $state.options.filter((option) => !option.disabled);

	function scrollTo(item) {
		const frame = {
			top: $list.element.scrollTop,
			bottom: $list.element.scrollTop + $list.element.offsetHeight
		};

		const element = {
			top: item.offsetTop,
			bottom: item.offsetTop + item.offsetHeight
		};

		if (element.top < frame.top) {
			$list.element.scrollTop = element.top;
		}

		if (element.bottom > frame.bottom) {
			$list.element.scrollTop = element.bottom - $list.element.offsetHeight;
		}
	}

	function handleNavigateDown(event) {
		event.preventDefault();

		$state.cursor = ($state.cursor + 1) % availableOptions.length;
		$state.active = availableOptions[$state.cursor];

		scrollTo($state.active.element);
	}

	function handleNavigateUp(event) {
		event.preventDefault();

		$state.cursor = ($state.cursor + availableOptions.length - 1) % availableOptions.length;
		$state.active = availableOptions[$state.cursor];

		scrollTo($state.active.element);
	}

	function handleEnter(event) {
		event.preventDefault();

		actions.select(availableOptions[$state.cursor].value);
	}

	const debounce = (callback, wait) => {
		let timeoutId = null;

		return (...args) => {
			window.clearTimeout(timeoutId);

			timeoutId = window.setTimeout(() => {
				callback.apply(null, args);
			}, wait);
		};
	};

	let query = '';
	function handleSearch(event) {
		event.preventDefault();

		query = `${query}${event.key}`;

		search();
	}

	function findOptionCursorPosition(option) {
		return availableOptions.findIndex((availableOption) => availableOption.key === option.key);
	}

	const search = debounce(() => {
		const option = availableOptions.find((option) =>
			option.element.innerText.toLowerCase().startsWith(query.toLowerCase())
		);

		if (!option) {
			query = '';
			return;
		}

		$state.cursor = findOptionCursorPosition(option);
		$state.active = option;

		query = '';
	}, 150);

	function handleKeydown(event) {
		if (!$state.isOpen) {
			return;
		}

		switch (event.key) {
			case 'ArrowDown':
				return handleNavigateDown(event);

			case 'ArrowUp':
				return handleNavigateUp(event);

			case 'Enter':
				return handleEnter(event);

			default:
				return handleSearch(event);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $state.isOpen}
	<ul role="listbox" {...$$restProps} bind:this={$list.element}>
		<slot />
	</ul>
{/if}
