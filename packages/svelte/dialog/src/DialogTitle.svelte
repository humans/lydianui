<script lang="ts">
	import { getContext } from './context';

	export let as = 'h2';

	const { handles, dialog } = getContext();
</script>

<svelte:element this={as} {...$$restProps} id={handles.firstOrNew('title')}>
	<slot />
</svelte:element>
