<script>
	import { afterUpdate, onMount } from 'svelte';
	import { toc } from '$helpers/layouts/table-of-contents';

	export let post;

	let element;

	afterUpdate(() => {
		$toc = Array.from(element.querySelectorAll('h2')).map((heading) => {
			return {
				text: heading.innerText,
				link: `${window.location.origin}${window.location.pathname}#${heading.id}`,
				element: heading
			};
		});
	});
</script>

<article class="page page--docs">
	<header class="page__header [ mb-10 ]">
		<h1 class="page__title [ tracking-tight text-3xl md:text-4xl font-bold ]">{post.title}</h1>

		{#if post.byline}
			<p class="[ text-base md:text-xl text-neutral-700 mt-1 ]">{post.byline}</p>
		{/if}
	</header>

	<div class="page__body prose syntax--github--dark" bind:this={element}>
		<svelte:component this={post.body} />
	</div>
</article>
