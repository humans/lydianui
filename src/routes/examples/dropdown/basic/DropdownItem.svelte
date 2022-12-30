<script lang="ts">
	import { DropdownItem } from '$lib';

	export let item;
	export let dropdown;
</script>

<DropdownItem
	let:active
	on:select={item.handler}
	on:select={dropdown.close}
	disabled={item.disabled}
	class="[ hover:cursor-pointer my-1 ]"
>
	<span
		class="[ block px-2.5 py-1 rounded flex justify-between items-center ]"
		class:opacity-50={item.disabled}
		class:bg-neutral-200={active}
	>
		<span>{item.text}</span>

		{#if item.hotkey}
			<kbd class="[ uppercase text-xs text-neutral-700 ]">{item.hotkey}</kbd>
		{/if}
	</span>
</DropdownItem>
