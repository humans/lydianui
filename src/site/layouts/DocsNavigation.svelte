<script>
	import navigation from './navigation.ts';
	import { page } from '$app/stores';

	export { className as class };

	let className = '';
</script>

<nav class="layout__navigation {className}">
	<ul class="[ space-y-12 ]">
		{#each navigation as category}
			<li>
				<strong class="[ font-bold ]">{category.text}</strong>

				<ul class="[ mt-1 leading-loose space-y-0.5 ]">
					{#each category.items as item}
						<li>
							<a
								href={item.link}
								class="[ font-medium duration-75 transition-colors text-muted hover:text-stroke block ]"
								class:text-white={$page.url.pathname === item.link}
								class:font-medium={$page.url.pathname === item.link}
							>
								{item.text}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</nav>
