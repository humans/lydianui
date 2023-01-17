<script>
	import { fly } from 'svelte/transition';
	import { Popover } from '$lib';
	import Chat from '@icons/Chat.svelte';
	import ChevronDown from '@icons/outline/ChevronDown.svelte';

	const Features = [
		{
			name: 'Some Feature Name',
			caption: "This is some random caption for the page that's just enough to hit two lines.",
			icon: Chat,
			url: '#'
		},
		{
			name: 'Some Feature Name',
			caption: "This is some random caption for the page that's just enough to hit two lines.",
			icon: Chat,
			url: '#'
		},
		{
			name: 'Some Feature Name',
			caption: "This is some random caption for the page that's just enough to hit two lines.",
			icon: Chat,
			url: '#'
		},
		{
			name: 'Some Feature Name',
			caption: "This is some random caption for the page that's just enough to hit two lines.",
			icon: Chat,
			url: '#'
		}
	];
</script>

<div class="[ flex bg-gradient-to-br from-indigo-600 to-cyan-500 h-screen ]">
	<header class="[ py-4 px-10 flex space-x-4 ]">
		{#each Array(4) as _}
			<Popover.Root behavior="press">
				<Popover.Button
					class="[ text-base tracking-tight font-bold text-white py-4 px-4 flex items-center space-x-2 ]"
				>
					<span>Products</span>
					<ChevronDown class="[ h-3.5 w-3.5 top-px relative text-neutral-700 ]" strokeWidth="2.5" />
				</Popover.Button>

				<Popover.Panel class="[ w-full absolute w-[450px] ]">
					<div
						transition:fly={{
							y: -5,
							duration: 150
						}}
						class="[ bg-white p-3 py-3 text-black rounded-xl shadow-2xl w-full grid gap-4 ]"
					>
						{#each Features as feature}
							<a
								href={feature.url}
								class="[ focus:bg-gray-300/25 hover:bg-gray-300/25 rounded-lg  ]"
							>
								<div class="[ flex px-3 py-2 space-x-3 ]">
									<svelte:component
										this={feature.icon}
										strokeWidth="2"
										class="[ h-6 w-6 shrink-0 mt-[6px] text-rose-600 ]"
									/>

									<div>
										<strong class="[ font-medium tracking-[-0.011em] leading-tight ]">
											{feature.name}
										</strong>
										<p class="[ text-sm text-gray-600 ]">{feature.caption}</p>
									</div>
								</div>
							</a>
						{/each}

						<div
							class="[ -mb-3 -mx-3 bg-gray-50 rounded-b-xl px-4 py-3 tracking-tight grid grid-cols-2 text-sm font-semibold ]"
						>
							<div>
								<a
									href="#"
									class="[ px-3 py-2.5 rounded-md hover:bg-gray-200 inline-flex items-center space-x-1.5 ]"
								>
									<Chat class="[ h-4 w-4 text-gray-500 ]" strokeWidth="2.25" />
									<span>Watch Demo</span>
								</a>
							</div>
							<div>
								<a
									href="#"
									class="[ px-3 py-2.5 rounded-md hover:bg-gray-200 inline-flex items-center space-x-1.5 ]"
								>
									<Chat class="[ h-4 w-4 text-gray-500 ]" strokeWidth="2.25" />
									<span>Contact Sales</span>
								</a>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Popover.Root>
		{/each}
	</header>
</div>
