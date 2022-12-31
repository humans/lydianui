<script>
	import '../css/app.css';
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
		on:select={(event) => alert(event.detail.item.name)}
		key="name"
		aria-orientation="vertical"
		role="listbox"
		aria-labelledby="navigation-list"
	>
		{#each components as component}
			<NavigatableItem role="option" key={component.name} let:active>
				<div class:bg-red-100={active} class="[ py-24 ]">
					{component.name}
				</div>
			</NavigatableItem>
		{/each}
	</NavigatableRoot>
</main>
