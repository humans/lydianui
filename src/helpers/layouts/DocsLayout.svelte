<script>
</script>

<div class="layout layout--docs [ min-h-full ]">
	<header class="layout__header [ flex justify-center absolute top-0 left-0 w-full ]">
		<div class="container [ w-full px-8 flex items-center justify-between ]">
			<div class="layout__logo">
				<strong>lydianui</strong>
			</div>

			<div class="[ text-sm hidden md:flex space-x-6 items-center justify-end lg:justify-between w-full ]">
				<div class="[ hidden lg:block ]">
					<form action="">
						<input
							type="text"
							class="[ bg-neutral-100 rounded-full text-sm py-1.5 px-4 ]"
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
				{#each Array(50) as _, index}
					<div>Navigation {index}</div>
				{/each}
			</div>
		</aside>

		<main class="layout__content [ w-full ]">
			<div class="[ max-w-4xl w-full mx-auto ]">
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
