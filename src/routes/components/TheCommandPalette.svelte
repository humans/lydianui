<script>
	import { goto } from '$app/navigation';
	import {
		Dialog,
		DialogPanel,
		DialogOverlay,
		Combobox,
		ComboboxOptions,
		ComboboxOption,
		ComboboxInput
	} from '$lib';
	import { tick } from 'svelte';
	import Search from '$icons/line/Search.svelte';

	let input;
	let state = {
		open: false
	};

	function navigate(url) {
		close();
		goto(url);
	}

	let commands = [
		{
			id: 'components--dialog',
			name: 'Dialog',
			callback: () => navigate('/components/dialog')
		},
		{
			id: 'components--listbox',
			name: 'Listbox',
			callback: () => navigate('/components/listbox')
		},
		{
			id: 'components--combobox',
			name: 'Combobox',
			callback: () => navigate('/components/combobox')
		},
		{
			id: 'components--popover',
			name: 'Popover',
			callback: () => navigate('/components/popover')
		}
	];

	async function open() {
		state.open = true;

		await tick();
	}

	function close() {
		state.open = false;
	}

	function handleKeydown(event) {
		if (event.metaKey && event.key === 'j') {
			open();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<Dialog bind:open={state.open}>
	<div class="[ fixed inset-0 bg-slate-900/90 backdrop-blur ]" />

	<div class="[ inset-0 fixed flex justify-center ]">
		<DialogPanel
			on:click-outside={close}
			class="[ shadow-xl shadow-white/20 max-w-3xl w-full self-start mt-24 ]"
		>
			<Combobox let:combobox>
				<div class="[ relative ]">
					<div class="[ relative ]">
						<Search
							class="[ h-4 w-4 absolute top-1/2 -translate-y-1/2 ml-[1.375rem] ]"
							strokeWidth="2.5"
						/>

						<ComboboxInput
							on:mount={combobox.focus}
							placeholder="Go to..."
							class="
							[ bg-black pl-12 px-8 py-4 rounded-xl block w-full outline-none text-lg highlight-white/5 tracking-tight border border-neutral-50 ]
							[ {open ? 'rounded-b-none' : ''} ]
						"
						/>
					</div>

					<ComboboxOptions
						class="[ absolute w-full bg-black py-3 px-[0.4375rem] rounded-b-xl border border-neutral-50 border-t-0 ]"
					>
						<div class="[ relative ]">
							{#each commands as command}
								<ComboboxOption key={command.id} value={command} let:active let:selected>
									<div
										class:bg-blue-600={active}
										class:font-bold={active}
										class:font-medium={!active}
										class="[ px-3 py-3 bg-opacity-25 rounded-md text-sm flex items-center space-x-2.5 ]"
									>
										<div class="[ h-5 w-5 bg-yellow-300 rounded ]" />
										<div>
											{command.name}
										</div>
									</div>
								</ComboboxOption>
							{/each}
						</div>
					</ComboboxOptions>
				</div>
			</Combobox>
		</DialogPanel>
	</div>
</Dialog>
