<script lang="ts">
	import { getContext } from './context';

	export let as = 'button';

	const { dropdown, handles } = getContext();
</script>

<svelte:element
	this={as}
	{...$$restProps}
	bind:this={$dropdown.$trigger}
	id={handles.firstOrNew('trigger')}
	aria-haspopup="menu"
	aria-controls={$handles.find('content')}
	aria-expanded={$dropdown.open ? 'true' : 'false'}
	on:click|preventDefault={dropdown.toggle}
>
	<slot />
</svelte:element>
