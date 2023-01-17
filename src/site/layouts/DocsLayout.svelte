<script>
	import DocsNavigation from '$helpers/layouts/DocsNavigation.svelte';
	import DocsTableOfContents from '$helpers/layouts/DocsTableOfContents.svelte';
	import TheHeader from '$helpers/layouts/TheHeader.svelte';

	export let examples = [];
</script>

<div class="layout layout--docs [ min-h-full ]">
	<TheHeader />

	<div class="[ max-w-[90rem] mx-auto px-8 pt-[6rem] flex ]">
		<aside class="layout__sidebar [ hidden lg:block w-64 pr-8 shrink-0 text-sm ]">
			<DocsNavigation class="[ sticky top-[6rem] ]" />
		</aside>

		<main class="layout__content [ w-full pb-24 ]">
			<div class="[ max-w-[680px] w-full mx-auto ]">
				<slot />
			</div>
		</main>

		<aside class="layout__table-of-contents [ text-sm hidden xl:block w-64 pl-8 shrink-0 ]">
			<div class="[ sticky top-[6rem] space-y-8 ]">
				<DocsTableOfContents />

				{#if examples.length > 0}
					<nav>
						<h3 class="[ font-bold ]">Examples</h3>

						<ul class="[ leading-loose space-y-0.5 mt-2 ]">
							{#each examples as example}
								<li>
									<a
										class="[ transition-all text-neutral-500 hover:text-stroke ]"
										href={example.link}
									>
										{example.text}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				{/if}
			</div>
		</aside>
	</div>
</div>
