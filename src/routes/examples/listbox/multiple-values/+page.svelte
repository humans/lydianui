<script>
	import { Listbox } from '$lib';
	import ChevronDown from '@icons/ChevronDown.svelte';
	import Check from '@icons/Check.svelte';

	const people = [
		{ id: 1, name: 'Durward Reynolds', unavailable: false },
		{ id: 2, name: 'Kenton Towne', unavailable: false },
		{ id: 3, name: 'Therese Wunsch', unavailable: false },
		{ id: 4, name: 'Benedict Kessler', unavailable: true },
		{ id: 5, name: 'Katelyn Rohan', unavailable: false }
	];

	let selected = [people[1], people[2]];
</script>

<div
	class="[ px-8 flex pt-12 justify-center bg-gradient-to-tr bg-gradient-to-r from-sky-400 to-indigo-500 h-screen text-sm text-black ]"
>
	<Listbox.Root bind:value={selected} class="[ max-w-sm w-full relative ]" multiple>
		<Listbox.Button
			class="
        [ bg-white text-left rounded-lg px-4 py-2 w-full flex justify-between items-center ]
        [ focus:outline-none focus:ring-2 ring-indigo-600 ring-offset-2 focus:ring-offset-transparent ]
      "
		>
			{#if selected.length > 2}
				<span class="[ font-medium ]">
					{selected
						.map((person) => person.name)
						.slice(0, 2)
						.join(', ')}, and {selected.length - 2} more...
				</span>
			{:else if selected.length > 0}
				<span class="[ font-medium ]">
					{selected.map((person) => person.name).join(', ')}
				</span>
			{:else}
				<span class="[ text-gray-600 ]"> No one selected </span>
			{/if}

			<ChevronDown class="[ w-4 h-4 text-neutral-500 top-0.5 ]" />
		</Listbox.Button>

		<Listbox.Options
			class="[ p-1.5 bg-white rounded-lg absolute mt-2 shadow-xl w-full space-y-0.5 ]"
		>
			{#each people as person (person.id)}
				<Listbox.Option
					key={person.id}
					value={person}
					disabled={person.unavailable}
					let:active
					let:selected
				>
					<div
						class:text-gray-400={person.unavailable}
						class:bg-gray-400={active}
						class:hover:cursor-pointer={!person.unavailable}
						class="[ flex items-center px-2 py-1 rounded-md bg-opacity-25 ]"
					>
						<span
							class:border-gray-400={!selected}
							class:border-blue-600={selected}
							class="[ h-4 w-4 border rounded-full flex items-center justify-center ]"
						>
							{#if selected}
								<span class="[ h-2.5 w-2.5 rounded-full bg-blue-600 ]" />
							{/if}
						</span>

						<span class="[ ml-3 ]">{person.name}</span>
					</div>
				</Listbox.Option>
			{/each}
		</Listbox.Options>
	</Listbox.Root>
</div>
