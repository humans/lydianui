<script>
	import '../css/app.css';
	import TheHeader from '@layouts/TheHeader.svelte';
	import TheFooter from '@layouts/TheFooter.svelte';
	import ContentContainer from '@components/ContentContainer.svelte';
	import ArrowRight from '@icons/outline/ArrowRight.svelte';
	import Button from '@components/Button.svelte';
	import ComponentsCarousel from './ComponentsCarousel.svelte';
	import FeaturesSection from './FeaturesSection.svelte';
</script>

<svelte:head>
	<title>Lydian UI</title>
</svelte:head>

<div>
	<TheHeader />

	<main>
		<article class="landing-page [ antialiased ]">
			<ContentContainer size="prose" class="[ mt-[6rem] ]">
				<div class="[ bg-rose-700 rounded-lg py-3.5 px-5 font-medium text-sm text-white ]">
					The API is subject to <span class="[ font-bold ]">breaking changes</span> before 1.0.
				</div>
			</ContentContainer>

			<section class="landing-page__hero [ pt-48 ]">
				<ContentContainer size="prose">
					<div
						class="[ max-w-xl flex flex-col items-center md:items-start text-center md:text-left optimize-legibility ]"
					>
						<div class="fleuron [ text-base text-muted mb-2 ]">A headless Svelte package</div>

						<h1 class="[ text-4xl md:text-5xl font-bold tracking-tight ]">
							Create web applications without compromise
						</h1>

						<p
							class="[ leading-relaxed text-muted mt-4 md:text-xl md:leading-relaxed tracking-[-0.011em] ]"
						>
							Fully accessible, unstyled components designed for Svelte.
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
				<h2 class="[ sr-only ]">Components</h2>

				<ComponentsCarousel />
			</section>

			<section class="landing-page__hook [ mt-36 h-[40rem] ]">
				<ContentContainer size="prose">
					<FeaturesSection />
				</ContentContainer>
			</section>
		</article>
	</main>

	<TheFooter class="[ mt-64 ]" />
</div>
