<script context="module">
	const Size = {
		max: 'content-container--max [ max-w-[90rem] ]',
		prose: 'content-container--marketing [ max-w-5xl ]'
	};
</script>

<script>
	export { className as class };
	export let size = 'base';

	let className = '';
</script>

<div class="content-container {Size[size]} [ mx-auto w-full ] {className}">
	<slot />
</div>

<style>
	.content-container {
		padding: 0 8vw;

		@screen md {
			padding: 0 6vw;
		}

		@screen lg {
			padding: 0 4vw;
		}

		@screen xl {
			padding: 0 2vw;
		}
	}
</style>
