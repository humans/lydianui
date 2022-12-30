<script lang="ts">
	import { useDropdown } from './store';
	import { setContext } from './context';
	import { useHandles } from './handles';
	import { useCursor } from './cursor';

	export let as = 'div';

	const handles = useHandles();
	const dropdown = useDropdown();
	const cursor = useCursor(dropdown);

	setContext({
		cursor,
		dropdown,
		handles
	});
</script>

<svelte:element this={as} {...$$restProps} id={handles.firstOrNew('root')}>
	<slot {dropdown} state={$dropdown} />
</svelte:element>
