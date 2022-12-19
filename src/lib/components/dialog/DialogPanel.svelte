<script lang="ts">
	import { clickOutside } from '$lib/actions/use-click-outside';

	interface $$Props {
		as: string;
		[key: string]: any;
	}

	interface $$Events {
		'click-outside': CustomEvent;
	}

	export let as = 'div';
</script>

<svelte:element this={as} {...$$restProps} use:clickOutside on:click-outside>
	<slot />
</svelte:element>
