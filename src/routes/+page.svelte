<script>
	import '../css/app.css';
	import TheHeader from '@layouts/TheHeader.svelte';
	import ContentContainer from '@components/ContentContainer.svelte';
	import Button from '@components/Button.svelte';
	import ArrowRight from '../site/icons/outline/ArrowRight.svelte';
</script>

<svelte:head>
	<title>Lydian UI</title>
</svelte:head>

<div>
	<TheHeader />

	<main>
		<article class="landing-page">
			<section class="landing-page__hero [ mt-[4.5rem] ]">
				<ContentContainer size="prose" class="[ h-[30rem] flex items-center ]">
					<div
						class="[ max-w-xl flex flex-col items-center md:items-start text-center md:text-left ]"
					>
						<h1 class="[ text-4xl md:text-5xl font-bold tracking-tight ]">Short snappy heading</h1>

						<p class="[ leading-relaxed text-muted mt-4 md:text-xl md:leading-relaxed ]">
							A caption that expands more about what the heading says. Preferably two lines of text
							to add more space.
						</p>

						<nav class="[ flex flex-wrap space-x-5 mt-8 ]">
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
								look="neutral"
								class="[ flex ]"
							>
								View on Github
							</Button>
						</nav>
					</div>
				</ContentContainer>
			</section>
		</article>
	</main>
</div>
