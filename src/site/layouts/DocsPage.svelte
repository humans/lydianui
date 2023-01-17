<script>
	import { afterUpdate } from 'svelte';
	import { toc } from '@layouts/table-of-contents';

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

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class="page page--docs">
	<header class="page__header [ mb-10 ]">
		<h1 class="page__title [ tracking-tight text-3xl md:text-4xl font-bold ]">{post.title}</h1>

		{#if post.subheading}
			<p class="[ text-base md:text-xl text-muted mt-1 ]">{post.subheading}</p>
		{/if}
	</header>

	<div class="page__body prose syntax--github--dark" bind:this={element}>
		<svelte:component this={post.body} />
	</div>
</article>
