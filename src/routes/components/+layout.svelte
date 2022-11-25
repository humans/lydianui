<script>
	import '../../css/app.css';
	import TheCommandPalette from './TheCommandPalette.svelte';

	export const prerender = true;
</script>

<div class="[ max-w-3xl mx-auto px-8 ]">
	<slot />
</div>

<TheCommandPalette />
