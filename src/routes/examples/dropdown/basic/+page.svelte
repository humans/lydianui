<script>
	import { fly } from 'svelte/transition';
	import { Dropdown } from '$lib';
	import ChevronDown from '$icons/ChevronDown.svelte';

	const actions = [
		{ text: 'Edit', handler: () => console.error('edit') },
		{ text: 'Share', disabled: true, handler: () => console.error('share') },
		{ text: 'Delete', handler: () => console.error('delete') },
		{ text: 'Add to Apple Calendar', handler: () => console.error('add to apple calendar') },
		{ text: 'Add to Google Calendar', handler: () => console.error('add to google calendar') }
	];
</script>

<svelte:head>
	<title>Dropdown</title>
</svelte:head>

<h1 class="[ sr-only ]">Dropdown</h1>

<div class="[ h-screen w-screen flex pt-48 justify-center ]">
	<Dropdown.Root let:dropdown let:state class="[ relative ]">
		<Dropdown.Trigger
			class="[ bg-neutral-100 px-5 py-2 rounded flex items-center space-x-2 text-sm ]"
		>
			<span>Actions</span>

			<ChevronDown class="[ h-3 w-3 relative top-px ]" />
		</Dropdown.Trigger>

		{#if state.open}
			<div
				transition:fly={{ y: 10, duration: 100 }}
				class="[ absolute bg-neutral-100 rounded-md shadow px-1.5 py-2.5 w-64 mt-2 text-sm ]"
			>
				<Dropdown.Content class="[ space-y-1 ]">
					{#each actions as { text, handler, disabled = false }}
						<Dropdown.Item
							let:active
							on:select={handler}
							on:select={dropdown.close}
							{disabled}
							class="[ hover:cursor-pointer ]"
						>
							<span
								class="[ block px-2.5 py-1 rounded ]"
								class:opacity-50={disabled}
								class:bg-neutral-200={active}
							>
								{text}
							</span>
						</Dropdown.Item>
					{/each}
				</Dropdown.Content>
			</div>
		{/if}
	</Dropdown.Root>
</div>
