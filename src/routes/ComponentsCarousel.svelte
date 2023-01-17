<script>
</script>

<div class="carousel component-carousel [ overflow-x-scroll flex space-x-6 pb-12 ]">
	{#each Array(5) as _}
		<div>
			<div
				class="[ h-[22rem] w-[22rem] bg-neutral-100 rounded-xl flex items-center justify-center text-sm font-medium text-sm ]"
			>
				Example here
			</div>

			<div class="[ leading-relaxed mt-3 pr-6 ]">
				<h3 class="[ font-medium ]">Component Name</h3>
				<p class="[ text-muted mt-0.5 ]">
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
		scroll-snap-align: start;
		scroll-snap-stop: always;

		padding-left: calc(var(--container-padding) + ((100vw - 1024px) / 2));

		@screen md {
			--container-padding: 6vw;
		}

		@screen lg {
			--container-padding: 4vw;
		}

		@screen xl {
			--container-padding: 2vw;
		}
	}
</style>
