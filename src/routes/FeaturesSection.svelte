<script>
	import Snippet from './Snippet.svelte';
	import Snippet2 from './Snippet2.svelte';
	import Snippet3 from './Snippet3.svelte';

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

<div class="[ grid lg:grid-cols-5 gap-12 ]">
	<div class="[ lg:col-span-2 ]">
		<header>
			<h2 class="[ text-3xl font-bold tracking-tight ]">Using Lydian</h2>
			<p class="[ mt-2.5 text-muted ]">
				The right section will change based on whichever feature is selected.. should it auto
				navigate? Depends on how difficult that feature is to build.
			</p>
		</header>

		<section class="[ grid gap-4 mt-12 -mx-6 ]">
			{#each features as feature}
				<button
					type="button"
					on:click={() => (selection = feature)}
					class="[ text-left px-6 py-5 rounded-lg bg-opacity-50 hover:bg-opacity-50 border transition ]"
					class:bg-neutral-200={selection === feature}
					class:border-transparent={selection !== feature}
					class:hover:bg-neutral-100={selection !== feature}
					class:border-neutral-200={selection === feature}
				>
					<span>
						<strong class="[ tracking-tight font-bold ]">{feature.title}</strong>
						<p class="[ text-sm text-muted mt-1 leading-relaxed ]">{feature.caption}</p>
					</span>
				</button>
			{/each}
		</section>
	</div>

	<div class="[ lg:col-span-3 ]">
		<svelte:component this={selection.preview} />
	</div>
</div>
