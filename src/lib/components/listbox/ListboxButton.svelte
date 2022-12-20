<script lang="ts">
	import { getContext } from './context';

	const { listbox, a11y } = getContext();
</script>

<button
	id={a11y.first('button')}
	type="button"
	{...$$restProps}
	on:click|preventDefault={listbox.toggle}
	bind:this={$listbox.$trigger}
	aria-expanded={$listbox.open ? 'true' : 'false'}
	aria-haspopup="true"
	aria-controls={a11y.first('options')}
>
	<slot />
</button>
