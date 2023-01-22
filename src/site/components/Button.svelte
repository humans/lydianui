<script context="module">
	const Look = {
		neutral:
			'button--neutral [ border-transparent bg-neutral-100 hover:bg-neutral-200 contrast-more:bg-neutral-200 hover:contrast-more:bg-neutral-300 highlight-white/5 ]',
		accent:
			'button--primary [ bg-accent-dark text-white border-transparent hover:bg-accent-base hover:shadow-2xl hover:shadow-accent-base/50 ]',
		clear: 'button--clear [ border-transparent bg-transparent ]',
		outline:
			'button--outline [ border border-neutral-100 bg-transparent hover:bg-neutral-100 focus:bg-neutral-100 ]',
		disabled: 'button--disabled [ pointer-events-none opacity-50 ]'
	};

	const Size = {
		tiny: 'button--tiny [ px-2.5 py-1.5 text-xs	 ]',
		small: 'button--small [ px-3 py-2 leading-4 text-sm ]',
		base: 'button--base [ px-4 py-2 text-sm ]'
	};
</script>

<script>
	export let as = 'button';
	export let look = 'neutral';
	export let size = 'base';
	export let disabled = false;
	export { className as class };

	let className = '';
</script>

<svelte:element
	this={as}
	on:click
	{...$$restProps}
	{disabled}
	aria-disabled={disabled ? 'true' : 'false'}
	class="
        button
        {Size[size]} {Look[look]} {className}
        {disabled ? Look.disabled : ''}
        [ transition duration-50 ]
        [ motion-safe:hover:-translate-y-px motion-safe:will-change-transform ]
        [ shadow-sm rounded-md border font-medium ]
        [ focus:ring-offset-canvas focus:ring-offset-2 focus:ring-2 focus:outline-none ]
    "
>
	<slot />
</svelte:element>
