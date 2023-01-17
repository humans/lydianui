<script>
	import { computePosition, shift, offset, autoUpdate } from '@floating-ui/dom';
	import { fly } from 'svelte/transition';
	import { Popover } from '$lib';
	import Chat from '@icons/Chat.svelte';
	import { onMount } from 'svelte';

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

	let reference;
	let tooltip;
	let cleanupFloatingUi;

	onMount(() => {
		cleanupFloatingUi = autoUpdate(reference, tooltip, () => {
			computePosition(reference, tooltip, {
				middleware: [shift({ padding: 16 }), offset({ mainAxis: 16 })]
			}).then(({ x, y }) => {
				Object.assign(tooltip.style, {
					left: `${x}px`,
					top: `${y}px`
				});
			});
		});
	});
</script>

<Popover.Root behavior="hover">
	<Popover.Button class="[ text-base tracking-tight font-bold text-white py-4 px-4 ]">
		<span bind:this={reference}>Products</span>
	</Popover.Button>

	<div bind:this={tooltip} class="[ w-[450px] absolute ]">
		<Popover.Panel>
			<div
				transition:fly={{
					y: -5,
					duration: 150
				}}
				class="[ bg-white p-3 py-3 text-black rounded-xl shadow-2xl w-full grid gap-4 h-full w-full relative ]"
			>
				{#each Features as feature}
					<a href={feature.url} class="[ focus:bg-gray-300/25 hover:bg-gray-300/25 rounded-lg  ]">
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
	</div>
</Popover.Root>
