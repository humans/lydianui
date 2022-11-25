<script>
	import { clickOutside } from '../../actions/use-click-outside.js';

	export let as = 'div';
</script>

<svelte:element this={as} {...$$restProps} use:clickOutside on:click-outside>
	<slot />
</svelte:element>
