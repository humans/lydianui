<script>
	import * as Combobox from '$lib/components/combobox';
	import { people } from '$helpers/factories';

	let selected;
</script>

<div
	class="[ px-8 flex pt-12 justify-center bg-gradient-to-tr bg-gradient-to-r from-sky-400 to-indigo-500 h-screen text-black space-x-8 ]"
>
	<Combobox.Root bind:value={selected} class="[ w-full ]" let:state let:combobox>
		<div class="[ relative ]">
			<Combobox.Input
				placeholder="Select someone..."
				class="[ border border-gray-100 bg-white rounded-lg px-4 py-2 w-full max-w-96 shadow ]"
				display={(value) => value.name}
				on:escape={combobox.close}
			/>

			<Combobox.Options class="[ absolute mt-2 bg-white rounded-lg py-3 px-2 w-full space-y-1 ]">
				{#each people as person}
					<Combobox.Option
						key={person.id}
						value={person}
						let:active
						let:selected
						disabled={person.unavailable}
					>
						<div
							class:bg-gray-400={active && !selected}
							class:bg-green-400={selected}
							class:hover:bg-green-200={selected}
							class:opacity-25={person.unavailable}
							class="[ flex py-1.5 px-2 space-x-3 rounded-md bg-opacity-25 hover:bg-opacity-25 cursor-pointer ]"
						>
							<div
								class="[ bg-indigo-900 h-12 w-12 rounded object-contain object-center rounded-md overflow-hidden shrink-0 ]"
							>
								<img src={person.image} alt={person.name} class="[ h-full w-full ]" />
							</div>

							<div class="[ leading-tight ]">
								<span class="[ block font-medium ]">{person.name}</span>
								<span class="[ block text-gray-500 mt-0.5 ] ">Some role name here</span>
							</div>
						</div>
					</Combobox.Option>
				{/each}
			</Combobox.Options>
		</div>
	</Combobox.Root>
</div>
