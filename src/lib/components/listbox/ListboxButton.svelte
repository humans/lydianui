<script lang="ts">
	import { getContext } from './context';

	const { listbox, handles } = getContext();
</script>

<button
	id={handles.firstOrNew('button')}
	type="button"
	{...$$restProps}
	on:click|preventDefault={listbox.toggle}
	bind:this={$listbox.$trigger}
	aria-haspopup="listbox"
	aria-expanded={$listbox.open ? 'true' : 'false'}
	aria-controls={$handles.find('options')}
>
	<slot />
</button>
