<script>
	import '../css/app.css';
	import Navigatable from '$lib/components/navigatable/Navigatable.svelte';
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

<h1>Lydian UI</h1>

<Navigatable
	items={readable(components)}
	key="name"
	orientation="horizontal"
	let:active
	class="[ flex ]"
>
	{#each components as component}
		<div class:bg-neutral-100={active?.name === component.name}>{component.name}</div>
	{/each}
</Navigatable>
