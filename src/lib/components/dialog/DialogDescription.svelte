<script>
	import { getContext } from './context';

	export let as = 'p';

	const { handles } = getContext();
</script>

<svelte:element this={as} {...$$restProps} id={handles.new('description')}>
	<slot />
</svelte:element>
