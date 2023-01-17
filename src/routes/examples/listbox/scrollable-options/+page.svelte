<script>
	import { Listbox } from '$lib';
	import ChevronDown from '@icons/outline/ChevronDown.svelte';
	import Check from '@icons/Check.svelte';

	const people = [
		{ id: 1, name: 'Durward Reynolds', unavailable: false },
		{ id: 2, name: 'Kenton Towne', unavailable: false },
		{ id: 3, name: 'Therese Wunsch', unavailable: false },
		{ id: 4, name: 'Benedict Kessler', unavailable: true },
		{ id: 5, name: 'Katelyn Rohan', unavailable: false },
		{ id: 11, name: 'Durward Reynolds', unavailable: false },
		{ id: 12, name: 'Kenton Towne', unavailable: false },
		{ id: 13, name: 'Therese Wunsch', unavailable: false },
		{ id: 14, name: 'Benedict Kessler', unavailable: true },
		{ id: 15, name: 'Katelyn Rohan', unavailable: false }
	];

	let selected = people[2];
</script>

<div
	class="[ px-8 flex pt-12 justify-center bg-gradient-to-tr bg-gradient-to-r from-sky-400 to-indigo-500 h-screen text-sm text-black ]"
>
	<Listbox.Root let:state bind:value={selected} class="[ max-w-sm w-full relative ]">
		<Listbox.Button
			class="
        [ bg-white text-left font-medium rounded-lg px-4 py-2 w-full flex justify-between items-center ]
        [ focus:outline-none focus:ring-2 ring-indigo-600 ring-offset-2 focus:ring-offset-transparent ]
      "
		>
			<span>{selected.name}</span>

			<ChevronDown class="[ w-4 h-4 text-neutral-500 top-0.5 ]" />
		</Listbox.Button>

		{#if state.open}
			<div class="[ w-full absolute mt-2 shadow-xl p-1.5 bg-white rounded-lg ]">
				<Listbox.Options class="[ relative space-y-0.5 max-h-40 overflow-y-auto ]">
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
								class:bg-green-500={selected && !active}
								class:hover:cursor-pointer={!person.unavailable}
								class="[ flex justify-between items-center px-2 py-1 rounded-md bg-opacity-25 ]"
							>
								<span>{person.name}</span>

								{#if selected}
									<Check class="[ h-3 w-3 text-green-700 mr-1 ]" />
								{/if}
							</div>
						</Listbox.Option>
					{/each}
				</Listbox.Options>
			</div>
		{/if}
	</Listbox.Root>
</div>
