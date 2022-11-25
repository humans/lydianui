<script>
	import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '$lib';
	import ChevronDown from '$helpers/icons/ChevronDown.svelte';
	import Check from '$helpers/icons/Check.svelte';

	const departments = [
		{
			name: 'Arts',
			people: [
				{ id: 2, name: 'Kenton Towne', unavailable: false },
				{ id: 4, name: 'Benedict Kessler', unavailable: true },
				{ id: 5, name: 'Katelyn Rohan', unavailable: false }
			]
		},
		{
			name: 'Physical Education',
			people: [
				{ id: 1, name: 'Durward Reynolds', unavailable: false },
				{ id: 3, name: 'Therese Wunsch', unavailable: false }
			]
		}
	];

	let selected = null;
</script>

<div
	class="[ px-8 flex pt-12 justify-center bg-gradient-to-tr bg-gradient-to-r from-sky-400 to-indigo-500 h-screen text-sm text-black ]"
>
	<Listbox bind:value={selected} class="[ max-w-sm w-full relative ]">
		<ListboxButton
			class="
        [ bg-white text-left font-medium rounded-lg px-4 py-2 w-full flex justify-between items-center ]
        [ focus:outline-none focus:ring-2 ring-indigo-600 ring-offset-2 focus:ring-offset-transparent ]
      "
		>
			{#if !selected}
				Select Someone
			{:else}
				<span>{selected.name}</span>
			{/if}

			<ChevronDown class="[ w-4 h-4 text-neutral-500 top-0.5 ]" />
		</ListboxButton>

		<ListboxOptions
			class="[ p-1.5 bg-white rounded-lg absolute mt-2 shadow-xl w-full space-y-0.5 ]"
		>
			{#each departments as department}
				<div class="[ mb-2 ]">
					<strong class="[ font-medium text-xs text-gray-400 uppercase tracking-wide mb-0.5 ml-2 ]">
						{department.name}
					</strong>

					{#each department.people as person (person.id)}
						<ListboxOption
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
						</ListboxOption>
					{/each}
				</div>
			{/each}
		</ListboxOptions>
	</Listbox>
</div>
