<script>
	import { fly } from 'svelte/transition';
	import * as Combobox from '$lib/components/combobox';
	import { fuzzy } from '$lib/helpers/collections';

	const people = [
		{
			id: 1,
			name: 'Durward Reynolds',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 2,
			name: 'Kenton Towne',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 3,
			name: 'Therese Wunsch',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 4,
			name: 'Benedict Kessler',
			unavailable: true,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 5,
			name: 'Katelyn Rohan',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 11,
			name: 'Durward Reynolds',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 12,
			name: 'Kenton Towne',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 13,
			name: 'Therese Wunsch',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 14,
			name: 'Benedict Kessler',
			unavailable: true,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		},
		{
			id: 15,
			name: 'Katelyn Rohan',
			unavailable: false,
			image: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 300)
		}
	];

	function handleSearchKeydown(event) {
		if (event.key === 'Backspace' && event.target.value.length === 0) {
			return handleSearchBackspace(event);
		}
	}

	function handleSearchBackspace(event) {
		if (selected.length === 0) {
			return;
		}

		selected = selected.slice(0, -1);
	}

	let behavior = 'hide';
	let selected = [];

	$: selectablePeople = behavior === 'hide' ? people.filter((p) => !selected.includes(p)) : people;
	$: filteredPeople = selectablePeople;

	function handleSearchInput(event) {
		if (!event.target.value) {
			filteredPeople = selectablePeople;
		} else {
			filteredPeople = fuzzy(selectablePeople, 'name', event.target.value);
		}
	}

	function removePerson(person) {
		selected = selected.filter((p) => p !== person);
	}
</script>

<div
	class="[ px-8 pt-8 bg-gradient-to-tr bg-gradient-to-r from-sky-400 to-indigo-500 h-screen text-black ]"
>
	<div>
		<section class="[ relative mb-8 flex ]">
			<div
				class="[ flex items-center text-sm font-medium relative text-white bg-teal-900/50 px-2 py-1.5 rounded-lg space-x-2 ]"
			>
				<label class="[ flex items-center cursor-pointer ]">
					<input type="radio" value="hide" bind:group={behavior} class="[ sr-only peer ]" />
					<span
						class="[ text-white/90 peer-checked:bg-teal-700 peer-checked:text-white peer-checked:shadow-md rounded-md py-1 px-3 ]"
					>
						Hide selected items
					</span>
				</label>

				<label class="[ flex items-center cursor-pointer ]">
					<input type="radio" value="show" bind:group={behavior} class="[ sr-only peer ]" />
					<span
						class="[ text-white/90 peer-checked:bg-teal-700 peer-checked:text-white peer-checked:shadow-md rounded-md py-1 px-3 ]"
					>
						Keep selected items
					</span>
				</label>
			</div>
		</section>

		<button on:click={() => (selected = [])}>Reset values from the outside</button>

		<Combobox.Root bind:value={selected} multiple let:state let:combobox>
			<div class="[ relative ]">
				<div
					class="[ border border-gray-100 bg-white rounded-lg px-4 py-2 w-full shadow inline-flex flex-wrap -m-0.5 ]"
				>
					{#each selected as person (person.id)}
						<div class="[ p-0.5 ]">
							<button
								type="button"
								class="[ px-1.5 rounded py-0.5 bg-gray-100 text-sm font-semibold ]"
								on:click|preventDefault={() => removePerson(person)}
							>
								<span>{person.name}</span>

								<span class="[ ml-1 font-normal text-neutral-600 relative bottom-px ]">&times;</span
								>
							</button>
						</div>
					{/each}

					<Combobox.Input
						placeholder="Select someone..."
						class="[ outline-none min-w-12 w-full ]"
						on:escape={combobox.close}
						on:input={handleSearchInput}
						on:keydown={handleSearchKeydown}
					/>
				</div>

				{#if state.open}
					<div
						class="[ absolute mt-2 bg-white rounded-lg py-3 px-2 w-full ]"
						transition:fly={{ y: 5, duration: 100 }}
					>
						<Combobox.Options class="[ max-h-[300px] overflow-y-auto relative ]">
							{#each filteredPeople as person (person.id)}
								<Combobox.Option let:selected let:active key={person.id} value={person}>
									<div
										class:bg-gray-400={active && !selected}
										class:bg-green-400={!active && selected}
										class:hover:bg-green-200={!active && selected}
										class:bg-green-200={active && selected}
										class="[ flex py-1.5 px-2 space-x-3 rounded-md bg-opacity-25 hover:bg-opacity-25 cursor-pointer ]"
									>
										<div
											class="[ bg-indigo-900 h-12 w-12 rounded object-contain object-center rounded-md overflow-hidden shrink-0 ]"
										>
											<img src={person.image} alt={person.name} class="[ h-full w-full ]" />
										</div>

										<div class="[ leading-tight ]">
											<span class="[ block font-medium ]">{person.name}</span>
											<span class="[ block text-gray-500 mt-0.5 ]">Some role name here</span>
										</div>
									</div>
								</Combobox.Option>
							{/each}

							{#if filteredPeople.length === 0}
								<div class="[ text-gray-600 text-sm text-center ]">No one found</div>
							{/if}
						</Combobox.Options>
					</div>
				{/if}
			</div>
		</Combobox.Root>
	</div>
</div>
