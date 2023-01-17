<script>
	import Example from '@components/Example.svelte';
</script>

<svelte:head>
	<title>Listbox</title>
</svelte:head>

<div class="page page--component component [ py-12 pb-48 ]">
	<header class="page__header">
		<h1 class="page__title component__name [ text-5xl font-semibold mb-2 ]">Listbox</h1>

		<p class="component__description [ text-neutral-800 ]">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto beatae,
			distinctio dolore eos exercitationem expedita id in, laudantium libero mollitia nobis non
			optio pariatur quae repellendus repudiandae tempora vitae!
		</p>
	</header>

	<section class="component__demos [ mt-12 space-y-16 ]">
		<Example name="Single Value" src="/examples/listbox/single-value" height="322px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>

		<Example name="With Option Group" src="/examples/listbox/grouped" height="322px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>

		<Example name="Scrollable Options" src="/examples/listbox/scrollable-options" height="322px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>

		<Example name="Multiple Values" src="/examples/listbox/multiple-values" height="322px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>
	</section>
</div>
