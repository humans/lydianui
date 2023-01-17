<script>
	import '../css/app.css';
	import TheHeader from '@layouts/TheHeader.svelte';
</script>

<svelte:head>
	<title>Lydian UI</title>
</svelte:head>

<div>
	<TheHeader />

	<main>
		<article class="landing-page">
			<section class="landing-page__hero [ mt-[4.5rem] ]">
				<div
					class="
						[ px-8 flex text-center justify-center items-center h-[30rem] ]
						[ max-w-6xl mx-auto ]
					"
				>
					<div class="[ max-w-xl ]">
						<h1 class="[ text-4xl md:text-5xl font-bold tracking-tight ]">Short snappy heading</h1>

						<p class="[ text-muted mt-4 md:text-xl leading-relaxed ]">
							A caption that expands more about what the heading says. Preferably two lines of text
							to add more space.
						</p>
					</div>
				</div>
			</section>
		</article>
	</main>
</div>
