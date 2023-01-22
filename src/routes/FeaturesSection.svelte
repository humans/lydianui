<script>
	import { NavigatableRoot, NavigatableItem } from '$lib';
	import Snippet from './Snippet.svelte';
	import Snippet2 from './Snippet2.svelte';
	import Snippet3 from './Snippet3.svelte';
	import { readable } from 'svelte/store';

	const features = [
		{
			title: 'Developer Experience',
			caption: 'This is a placeholder copy about the developer experience.',
			preview: Snippet
		},
		{
			title: 'Accessible',
			caption: 'Some copy about compliance with the ARIA standards.',
			preview: Snippet2
		},
		{
			title: 'Another One',
			caption:
				"Here is a third option that's just a smidge longer than the other feature descriptions.",
			preview: Snippet3
		}
	];

	let selection = features[0];
</script>

<div class="[ grid lg:grid-cols-5 gap-16 ]">
	<div class="[ lg:col-span-2 ]">
		<header>
			<h2 class="[ text-3xl font-bold tracking-tight ]">Using Lydian</h2>
			<p class="[ mt-2.5 text-muted ]">
				The right section will change based on whichever feature is selected.. should it auto
				navigate? Depends on how difficult that feature is to build.
			</p>
		</header>

		<NavigatableRoot
			class="[ grid gap-4 mt-12 -mx-8 rounded-xl focus:outline-none focus-visible:bg-neutral-50 px-3 py-3 ]"
			key="title"
			aria-label="Feature List"
			items={readable(features)}
			role="listbox"
			tabindex="0"
		>
			{#each features as feature}
				<NavigatableItem
					role="option"
					key={feature.title}
					let:active
					item={feature}
					on:select={() => (selection = feature)}
					class="[ focus:outline-none hover:cursor-pointer ]"
				>
					<div
						class="
							[ text-left px-6 py-5 rounded-lg bg-opacity-50 hover:bg-opacity-50 transition ]
							[ focus:bg-neutral-100 ]
							[ {active ? 'highlight-white/5' : ''} ]
						"
						class:bg-neutral-200={selection === feature || active}
						class:hover:bg-neutral-100={selection !== feature}
						class:bg-neutral-300={selection === feature && active}
					>
						<span>
							<strong class="[ tracking-tight font-bold ]">{feature.title}</strong>
							<p class="[ text-sm text-muted mt-1 leading-relaxed ]">{feature.caption}</p>
						</span>
					</div>
				</NavigatableItem>
			{/each}
		</NavigatableRoot>
	</div>

	<div class="[ lg:col-span-3 will-change-contents ]">
		<svelte:component this={selection.preview} />
	</div>
</div>
