<script lang="ts">
	import { setContext } from './context';
	import { useHandles } from './handles';
	import { useStore } from './store';

	interface $$Props {
		as: string;
		open: boolean;
		[key: string]: any;
	}

	export let as = 'div';

	export let open;

	const dialog = useStore({
		open
	});

	const handles = useHandles();

	setContext({
		dialog,
		handles
	});

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			open = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:element
	this={as}
	{...$$restProps}
	role="dialog"
	aria-labelledby={$handles.find('title')}
	aria-describedby={$handles.list('description')}
>
	{#if open}
		<slot />
	{/if}
</svelte:element>
