<script>
	import Example from '@components/Example.svelte';
</script>

<svelte:head>
	<title>Combobox</title>
</svelte:head>

<div class="page page--component component [ py-12 pb-48 ]">
	<header class="page__header">
		<h1 class="page__title component__name [ text-5xl font-semibold mb-2 ]">Combobox</h1>

		<p class="component__description [ text-neutral-800 ]">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto beatae,
			distinctio dolore eos exercitationem expedita id in, laudantium libero mollitia nobis non
			optio pariatur quae repellendus repudiandae tempora vitae!
		</p>
	</header>

	<div>
		<div>- Autocomplete / Typeahead</div>
		<div>- Selectable Input</div>
		<div>- Tags</div>
		<div>- Command Palette</div>
	</div>

	<section class="component__examples [ mt-12 space-y-16 ]">
		<Example name="Autocomplete" src="/examples/combobox/autocomplete" height="500px">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolorem ducimus
				eius illo incidunt ipsum, magni minus modi molestias omnis repellat repellendus, sunt unde
				vel. Beatae laudantium maxime rerum.
			</p>
		</Example>

		<Example name="Multiple Select" src="/examples/combobox/autocomplete-multiple" height="600px" />

		<Example name="Command Palette" src="/examples/combobox/command-palette" height="600px" />
	</section>
</div>
