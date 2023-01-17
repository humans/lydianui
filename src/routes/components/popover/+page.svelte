<script>
	import Example from '@components/Example.svelte';
</script>

<svelte:head>
	<title>Popover</title>
</svelte:head>

<div class="page page--component component [ py-12 pb-48 ]">
	<header class="page__header">
		<h1 class="page__title component__name [ text-5xl font-semibold mb-2 ]">Popover</h1>

		<p class="component__description [ text-neutral-800 ]">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto beatae,
			distinctio dolore eos exercitationem expedita id in, laudantium libero mollitia nobis non
			optio pariatur quae repellendus repudiandae tempora vitae!
		</p>
	</header>

	<section class="component__examples [ mt-12 space-y-16 ]">
		<Example name="Hover" src="/examples/popover/hover" height="600px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>
		<Example name="Press" src="/examples/popover/press" height="600px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>
		<Example
			name="Using positioning libraries like Floating UI"
			src="/examples/popover/floating-ui"
			height="600px"
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>
		<Example name="Using portals" src="/examples/popover/portal" height="600px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>
	</section>
</div>
