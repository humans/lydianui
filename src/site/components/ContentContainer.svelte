<script context="module">
	const Size = {
		max: 'content-container--max [ max-w-[90rem] ]',
		prose: 'content-container--marketing [ max-w-6xl ]'
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

<style global>
	.content-container {
		--container-padding: 8vw;

		padding: 0 var(--container-padding);

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
