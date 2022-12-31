<script>
	import '../css/app.css';
	import { Navigatable } from '$lib';
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

	<Navigatable
		items={readable(components)}
		on:select={(event) => alert(event.detail.item.name)}
		key="name"
		orientation="horizontal"
		role="listbox"
		aria-orientation="horizontal"
		aria-labelledby="navigation-list"
		let:active
		class="[ flex ]"
	>
		{#each components as component}
			<div role="option" tabindex="-1" class:bg-neutral-100={active?.name === component.name}>
				{component.name}
			</div>
		{/each}
	</Navigatable>
</main>
