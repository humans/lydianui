<script lang="ts">
	export let title;
	export let type = 'neutral';

	const TypeStyle = {
		neutral: 'callout--neutral [ bg-neutral-100 ]'
	};
</script>

<div class="callout {TypeStyle[type]} [ px-8 py-6 rounded-xl ]">
	{#if title}
		<header class="[ mb-2 ]">
			<strong>{title}</strong>
		</header>
	{/if}

	<div class="[ leading-relaxed ]">
		<slot />
	</div>
</div>
