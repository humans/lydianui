<script>
	export let name;
	export let src;
	export let height = '400px';
</script>

<section class="example">
	<header class="example__header">
		<h2 class="example__title [ font-extrabold text-3xl tracking-tight ]">{name}</h2>
	</header>

	<div class="example__description [ mt-2 text-neutral-800 ]">
		<slot />
	</div>

	<div class="example__preview preview">
		<div class="[ overflow-hidden rounded-xl w-full mt-6 ]" style="height: {height}">
			<iframe {src} class="preview__frame [ h-full w-full ]" />
		</div>
	</div>
</section>
