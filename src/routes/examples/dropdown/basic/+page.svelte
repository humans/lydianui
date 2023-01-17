<script>
	import { computePosition } from '@floating-ui/dom';
	import { tick } from 'svelte';
	import { fly } from 'svelte/transition';
	import ChevronDown from '@icons/ChevronDown.svelte';
	import { DropdownRoot, DropdownContent, DropdownTrigger } from '$lib';
	import DropdownItem from './DropdownItem.svelte';
	import DropdownSeparator from './DropdownSeparator.svelte';

	let trigger;
	let content;

	const actions = [
		{ component: DropdownItem, text: 'Edit', hotkey: 'e', handler: () => alert('edit') },
		{
			component: DropdownItem,
			text: 'Share',
			hotkey: 's',
			disabled: true,
			handler: () => alert('share')
		},
		{ component: DropdownItem, text: 'Delete', hotkey: 'd', handler: () => alert('delete') },
		{ component: DropdownSeparator },
		{
			component: DropdownItem,
			text: 'Add to Apple Calendar',
			handler: () => alert('add to apple calendar')
		},
		{
			component: DropdownItem,
			text: 'Add to Google Calendar',
			handler: () => alert('add to google calendar')
		}
	];

	async function handleDropdownOpen() {
		await tick();

		computePosition(trigger, content, {
			placement: 'bottom-end'
		}).then(({ x, y }) => {
			Object.assign(content.style, {
				left: `${x}px`,
				top: `${y}px`
			});
		});
	}
</script>

<svelte:head>
	<title>Dropdown</title>
</svelte:head>

<h1 class="[ sr-only ]">Dropdown</h1>

<div class="[ h-screen w-screen flex pt-48 justify-center ]">
	<DropdownRoot let:dropdown let:state class="[ relative ]" on:open={handleDropdownOpen}>
		<DropdownTrigger class="[ focus:outline-none ]">
			<span
				bind:this={trigger}
				class:ring-2={state.open}
				class="
					[ bg-neutral-100 px-5 py-2 rounded flex items-center space-x-2 text-sm ]
					[ ring-offset-2 ring-offset-canvas ring-accent-base ]
				"
			>
				<span>Actions</span>

				<ChevronDown class="[ h-3 w-3 relative top-px ]" />
			</span>
		</DropdownTrigger>

		{#if state.open}
			<div
				transition:fly={{ y: 10, duration: 100 }}
				bind:this={content}
				class="[ absolute bg-neutral-100 rounded-md shadow px-1.5 py-0.5 w-48 mt-2 text-sm ]"
			>
				<DropdownContent>
					{#each actions as item}
						<svelte:component this={item.component} {item} {dropdown} />
					{/each}
				</DropdownContent>
			</div>
		{/if}
	</DropdownRoot>
</div>
