<script>
	import '../css/app.css';
	import TheHeader from '@layouts/TheHeader.svelte';
	import ContentContainer from '@components/ContentContainer.svelte';
	import Button from '@components/Button.svelte';
	import ArrowRight from '../site/icons/outline/ArrowRight.svelte';
	import TheFooter from '@layouts/TheFooter.svelte';
	import ComponentsCarousel from './ComponentsCarousel.svelte';

	const features = [
		{
			title: 'Simple.',
			caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus'
		},
		{
			title: 'Accessible.',
			caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium at.'
		},
		{
			title: 'Headless.',
			caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		}
	];
</script>

<svelte:head>
	<title>Lydian UI</title>
</svelte:head>

<div>
	<TheHeader />

	<main>
		<article class="landing-page">
			<section class="landing-page__hero [ mt-[5rem] pt-48 ]">
				<ContentContainer size="prose">
					<div
						class="[ max-w-xl flex flex-col items-center md:items-start text-center md:text-left ]"
					>
						<div class="fleuron [ text-base text-muted mb-2 ]">A headless Svelte package</div>

						<h1 class="[ text-4xl md:text-6xl font-bold tracking-tight ]">
							Build fast without compromise
						</h1>

						<p class="[ leading-relaxed text-muted mt-4 md:text-xl md:leading-relaxed ]">
							Unstyled and fully accessible designed for Svelte.
						</p>

						<div>
							<nav class="[ flex flex-wrap space-x-5 mt-10 ]">
								<Button
									as="a"
									href="/docs/overview/getting-started"
									look="accent"
									class="[ inline-flex items-center ]"
								>
									Get Started <ArrowRight class="[ ml-2 h-4 w-4 ]" />
								</Button>

								<Button
									as="a"
									href="https://github.com/humans/lydianui"
									target="_blank"
									look="outline"
									class="[ flex ]"
								>
									View on Github
								</Button>
							</nav>
						</div>
					</div>
				</ContentContainer>
			</section>

			<section class="landing-page__components [ mt-24 ]">
				<ComponentsCarousel />
			</section>

			<section class="landing-page__features [ mt-48 ]">
				<ContentContainer size="prose">
					<h2 class="[ sr-only ]">Features</h2>

					<section class="[ grid gap-8 lg:grid-cols-3 mt-8 ]">
						{#each features as feature}
							<div>
								<div class="[ h-14 w-14 bg-neutral-100 rounded-lg mb-2.5 ]" />
								<div>
									<h3 class="[ text-base tracking-tight font-bold ]">{feature.title}</h3>
									<p class="[ text-muted mt-1 leading-relaxed ]">{feature.caption}</p>
								</div>
							</div>
						{/each}
					</section>
				</ContentContainer>
			</section>
		</article>
	</main>

	<TheFooter class="[ mt-64 ]" />
</div>
