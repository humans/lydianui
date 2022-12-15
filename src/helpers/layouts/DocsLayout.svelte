<script>
	import navigation from './navigation.ts';
</script>

<div class="layout layout--docs [ min-h-full ]">
	<header class="layout__header [ flex justify-center absolute top-0 left-0 w-full ]">
		<div class="container [ w-full px-8 flex items-center justify-between ]">
			<div class="layout__logo">
				<strong>lydianui</strong>
			</div>

			<div
				class="[ text-sm hidden md:flex space-x-6 items-center justify-end lg:justify-between w-full ]"
			>
				<div class="[ hidden lg:block ]">
					<form action="">
						<input
							type="text"
							class="[ bg-neutral-100 rounded-md text-sm py-2 px-4 ]"
							placeholder="Search..."
						/>
					</form>
				</div>

				<ul class="[ flex space-x-4 ]">
					<li><a href="">Docs</a></li>
					<li><a href="">API</a></li>
					<li><a href="">Plugins</a></li>
					<li><a href="">Case Studies</a></li>
				</ul>
			</div>
		</div>
	</header>

	<div class="layout__body [ md:flex ]">
		<aside
			class="layout__sidebar [ hidden md:flex text-sm bg-neutral-50 min-h-screen w-full shrink-0 ]"
		>
			<div class="layout__navigation [ px-8 overflow-y-auto ]">
				<ul class="[ space-y-6 ]">
					{#each navigation as category}
						<li>
							<strong class="[ font-bold ]">{category.text}</strong>

							<ul class="[ mt-2 space-y-1.5 ]">
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
		</aside>

		<main class="layout__content [ w-full ]">
			<div class="[ max-w-3xl w-full mx-auto ]">
				<div class="[ px-8 ]">
					<slot />
				</div>
			</div>
		</main>
	</div>
</div>

<style lang="postcss">
	:root {
		--layout-header-height: 80px;
		--layout-navigation-width: 250px;
		--layout-max-width: 90rem;
		--layout-padding: 4rem;
	}

	.layout__sidebar {
		width: calc(
			(100% - (var(--layout-max-width) - var(--layout-padding))) / 2 +
				var(--layout-navigation-width) - (var(--layout-padding) / 2)
		);
		min-width: var(--layout-navigation-width);
		padding-left: calc((100% - var(--layout-max-width)) / 2);
	}

	.layout__navigation {
		min-width: var(--layout-navigation-width);
		max-height: calc(100vh - var(--layout-header-height));
	}

	.layout__logo {
		min-width: calc(var(--layout-navigation-width));
	}

	.container {
		max-width: calc(var(--layout-max-width));
		height: var(--layout-header-height);
	}

	.layout__sidebar,
	.layout__content {
		padding-top: calc(var(--layout-header-height));
	}
</style>
