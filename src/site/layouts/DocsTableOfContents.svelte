<script>
	import { toc } from '$helpers/layouts/table-of-contents';
	import { onMount } from 'svelte';

	export { className as class };

	let className = '';
	let passed = [];

	onMount(() => {
		toc.subscribe(() => highlightLinks());
	});

	function navigate({ element }) {
		window.scroll({
			top: element.offsetTop - 96,
			behavior: 'smooth'
		});
	}

	function highlightLinks() {
		if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 48) {
			passed = $toc;
		} else {
			passed = $toc.filter(({ element }) => {
				return window.scrollY + 112 >= element.offsetTop;
			});
		}
	}
</script>

<svelte:window on:scroll={highlightLinks} />

<div class={className}>
	<h3 class="[ font-bold ]">On this page...</h3>

	{#if $toc.length > 0}
		<ul class="[ leading-loose space-y-0.5 mt-2 ]">
			{#each $toc as heading}
				<li>
					<a
						class="[ transition-all hover:text-stroke ]"
						href={heading.link}
						on:click|preventDefault={() => navigate(heading)}
						class:text-neutral-500={!passed.includes(heading)}
						class:text-stroke={passed.includes(heading)}
					>
						{heading.text}
					</a>
				</li>
			{/each}
			<li>
				<a
					class="[ text-neutral-500 transition-all hover:text-stroke ]"
					on:click|preventDefault={() => window.scroll({ top: 0, behavior: 'smooth' })}
					href="#"
				>
					Back to Top &uarr;
				</a>
			</li>
		</ul>
	{/if}
</div>
