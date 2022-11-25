<script context="module">
	export const DialogContextKey = Symbol();
</script>

<script>
	export let as = 'div';

	export let open;

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			open = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:element this={as} {...$$restProps} aria-modal="true">
	{#if open}
		<slot />
	{/if}
</svelte:element>
