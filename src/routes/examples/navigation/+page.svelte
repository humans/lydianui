<script>
	import { NavigatableRoot, NavigatableItem } from '$lib';
	import { readable } from 'svelte/store';

	export const prerender = true;

	const components = [
		{ name: 'Cursor' },
		{ name: 'Dialog' },
		{ name: 'Dropdown Menu' },
		{ name: 'Combobox' },
		{ name: 'Listbox' },
		{ name: 'Popover' }
	];
</script>

<svelte:head>
	<title>Lydian UI</title>
</svelte:head>

<main>
	<h1>Lydian UI</h1>

	<h2 id="navigation-list">Navigation List</h2>

	<NavigatableRoot
		items={readable(components)}
		key="name"
		aria-orientation="vertical"
		role="listbox"
		aria-labelledby="navigation-list"
	>
		{#each components as component}
			<NavigatableItem
				role="option"
				key={component.name}
				let:active
				item={component}
				on:select={() => alert(component.name)}
			>
				<div class:bg-red-700={active} class="[ py-24 ]">
					{component.name}
				</div>
			</NavigatableItem>
		{/each}
	</NavigatableRoot>
</main>
