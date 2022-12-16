<script>
	import navigation from './navigation.ts';

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
								class="[ duration-75 transition-colors text-neutral-700 hover:text-neutral-900 block ]"
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
