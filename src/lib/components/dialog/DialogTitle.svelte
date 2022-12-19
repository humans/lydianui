<script>
	import { getContext } from './context';

	export let as = 'h2';

	const { aria, dialog } = getContext();

	const id = `dialog-title--${$dialog.id}`;

	$aria.labelledby = id;
</script>

<svelte:element this={as} {id} {...$$restProps}>
	<slot />
</svelte:element>
