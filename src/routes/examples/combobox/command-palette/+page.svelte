<script>
	import { Combobox } from '$lib';
	import Stack from '@iconssolid/Stack.svelte';
	import Search from '@iconsoutline/Search.svelte';

	const RootCommands = [
		{
			id: 1,
			name: 'Switch Themes',
			icon: Stack,
			callback: () => {
				commands = [
					{
						id: 'themes--switch--dark',
						name: 'Dark Theme',
						icon: Stack,
						active: false,
						callback: ({ close }) => {
							alert('Switching to Dark Theme');
							close();
						}
					},
					{
						id: 'themes--switch--light',
						name: 'Light Theme',
						icon: Stack,
						active: true,
						callback: ({ close }) => {
							alert('Switching to Light Theme');
							close();
						}
					},
					{
						id: 'themes--switch--back',
						name: 'Back to main (or press Escape)',
						icon: Stack,
						active: false,
						callback: (context) => {
							commands = RootCommands;
						}
					}
				];
			}
		},
		{
			id: 2,
			name: 'Manually redirect to a different page via Inertia',
			icon: Stack,
			callback: ({ close }) => {
				close();
			}
		},
		{
			id: 3,
			name: 'Here is another alert',
			icon: Stack,
			callback: ({ close }) => {
				close();
				alert('wahoo!');
			}
		},
		{
			id: 4,
			name: 'Like more alerts',
			icon: Stack,
			callback: ({ close }) => {
				alert('wahoo!');
				close();
			}
		},
		{
			id: 5,
			name: 'ALERTS!',
			icon: Stack,
			callback: ({ close }) => {
				alert('wahoo!');
				close();
			}
		}
	];

	let commands = RootCommands;

	function handleEscape({ detail }) {
		if (commands === RootCommands) {
			detail.close();
		} else {
			commands = RootCommands;
		}
	}

	function handleClose() {
		console.error('handling close');
		commands = RootCommands;
	}
</script>

<div
	class="[ px-8 flex pt-12 justify-center bg-gradient-to-tr bg-gradient-to-r from-sky-400 to-indigo-500 h-screen text-black ]"
>
	<Combobox.Root let:open on:close={handleClose} class="[ w-full ]">
		<div class="[ relative max-w-[600px] w-full mx-auto ]">
			<div class="[ relative z-10 ]">
				<Combobox.Input
					on:escape={handleEscape}
					placeholder="Search for a command"
					class="
						[ border border-gray-100 bg-white rounded-lg pl-12 px-4 py-4 w-full outline-none ]
						[ {open ? 'rounded-b-none border-b-0' : 'shadow-md'} ]
					"
				/>

				<Search
					strokeWidth="2.5"
					class="[ h-4 w-4 absolute top-1/2 -translate-y-1/2 ml-5 text-gray-400 ]"
				/>
			</div>

			<Combobox.Options>
				<div
					class="[ absolute bg-white rounded-lg rounded-t-none py-3 px-2 w-full space-y-1 shadow-2xl border-t border-gray-200 ]"
				>
					{#each commands as command (command.id)}
						<Combobox.Option key={command.id} value={command} let:active>
							<div
								class="[ leading-tight w-full rounded-md bg-opacity-25 py-2.5 px-3 flex items-center space-x-2 text-sm ]"
								class:bg-gray-300={active}
								class:font-bold={active}
							>
								<div>
									<svelte:component this={command.icon} class="[ h-4 w-4 text-gray-500 ]" />
								</div>

								<div>
									<span class="[ block ]">{command.name}</span>
								</div>
							</div>
						</Combobox.Option>
					{/each}
				</div>
			</Combobox.Options>
		</div>
	</Combobox.Root>
</div>
