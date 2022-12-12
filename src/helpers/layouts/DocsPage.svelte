<script>
	export let post;
</script>

<article class="page page--docs [ py-12 ]">
	<header class="page__header [ mb-10 ]">
		<h1 class="page__title [ text-2xl md:text-3xl font-bold ]">{post.title}</h1>

		{#if post.byline}
			<p class="[ text-base md:text-xl text-neutral-700 mt-1 ]">{post.byline}</p>
		{/if}
	</header>

	<div class="page__body [ prose ]">
		<svelte:component this={post.body} />
	</div>
</article>
