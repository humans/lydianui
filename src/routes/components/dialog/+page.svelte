<script>
	import Example from '$helpers/components/Example.svelte';
</script>

<svelte:head>
	<title>Dialog</title>
</svelte:head>

<div class="page page--component component [ py-12 pb-48 ]">
	<header class="page__header">
		<h1 class="page__title component__name [ text-5xl font-semibold mb-2 ]">Dialog</h1>

		<p class="component__description [ text-neutral-800 ]">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto beatae,
			distinctio dolore eos exercitationem expedita id in, laudantium libero mollitia nobis non
			optio pariatur quae repellendus repudiandae tempora vitae!
		</p>
	</header>

	<section class="component__demos [ mt-12 space-y-16 ]">
		<Example name="Basic Example" src="/examples/dialog/basic" height="322px">
			<p>Here's an example of a dialog.</p>
		</Example>

		<Example
			name="Close when clicked outside"
			src="/examples/dialog/close-when-clicked-outside"
			height="600px"
		>
			<p>
				There are dialogs that you might want to close when a user clicks outside of the panel.
				These can be quick previews, confirmation dialogs, etc...
			</p>
		</Example>
	</section>
</div>
