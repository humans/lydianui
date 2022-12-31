<script>
	import { getContext } from './context';
	import { derived } from 'svelte/store';

	export let as = 'div';
	export let key;

	const { cursor } = getContext();

	const active = derived(cursor, ($cursor) => {
		if (!$cursor.item) {
			return false;
		}

		return $cursor.item[$cursor.uniqueBy] === key;
	});
</script>

<svelte:element this={as} {...$$restProps} tabindex="-1">
	<slot active={$active} />
</svelte:element>
