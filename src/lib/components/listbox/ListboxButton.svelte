<script lang="ts">
	import { getContext } from './context';

	const { listbox, id } = getContext();
</script>

<button
	id={id.firstOrNew('button')}
	type="button"
	{...$$restProps}
	on:click|preventDefault={listbox.toggle}
	bind:this={$listbox.$trigger}
	aria-expanded={$listbox.open ? 'true' : 'false'}
	aria-haspopup="true"
	aria-controls={$id.find('options')}
>
	<slot />
</button>
