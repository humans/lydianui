<script>
	import navigation from './navigation.ts';
	import { page } from '$app/stores';

	export { className as class };

	let className = '';
</script>

<div class="layout__navigation {className}">
	<ul class="[ space-y-6 ]">
		{#each navigation as category}
			<li>
				<strong class="[ font-bold ]">{category.text}</strong>

				<ul class="[ mt-2 leading-loose space-y-0.5 ]">
					{#each category.items as item}
						<li>
							<a
								href={item.link}
								class="[ duration-75 transition-colors text-muted hover:text-white block ]"
								class:text-white={$page.url.pathname === item.link}
							>
								{item.text}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>
