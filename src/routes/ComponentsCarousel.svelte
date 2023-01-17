<script>
</script>

<div class="carousel component-carousel [ overflow-x-scroll flex space-x-6 pb-12 pr-24 ]">
	{#each Array(5) as _}
		<div class="carousel__item component">
			<div
				class="component__preview [ h-[22rem] w-[22rem] bg-neutral-100 rounded-xl flex items-center justify-center text-sm font-medium text-sm ]"
			/>

			<div class="[ leading-relaxed mt-3 pr-6 ]">
				<h3 class="component__name [ font-medium ]">Component Name</h3>
				<p class="component__description [ text-muted mt-0.5 ]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium at
					deserunt doloribus,
				</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.component-carousel {
		--container-padding: 8vw;

		padding-left: var(--container-padding);

		@screen md {
			--container-padding: 6vw;
		}

		@screen lg {
			padding-left: calc(var(--container-padding) + ((100vw - 1024px) / 2));
			--container-padding: 4vw;
		}

		@screen xl {
			--container-padding: 2vw;
		}
	}
</style>
