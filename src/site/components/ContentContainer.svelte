<script context="module">
	const Size = {
		prose: 'content-container--marketing [ max-w-6xl ]'
	};
</script>

<script>
	export { className as class };
	export let size = 'base';

	let className = '';
</script>

<div class="content-container {Size[size]} [ mx-auto ] {className}">
	<slot />
</div>

<style>
	.content-container {
		padding: 0 8vw;
	}
</style>
