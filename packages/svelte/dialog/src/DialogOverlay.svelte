<script land="ts">
	import { getContext } from './context';

	export let as = 'div';

	const { dialog, handles } = getContext();
</script>

<svelte:element this={as} {...$$restProps} aria-hidden="true" id={handles.firstOrNew('overlay')} />
