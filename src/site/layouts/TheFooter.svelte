<script>
	import ContentContainer from '@components/ContentContainer.svelte';
	import Humans from '@icons/Humans.svelte';

	export { className as class };

	let className = '';
</script>

<footer class="the-footer [ pb-36 ] {className}">
	<ContentContainer size="max">
		<div class="[ h-px bg-gradient-to-r from-muted/5 via-muted/60 to-muted/5$ ]" />

		<div class="[ pt-12 flex flex-col items-center leading-relaxed space-y-1.5 ]">
			<a href="https://humans.ph" target="_blank">
				<span class="[ sr-only ]">Made by humans</span>
				<Humans class="[ h-5 ]" />
			</a>

			<p class="[ text-sm text-muted ]">© 2023 Humans Philippines. All rights reserved.</p>
		</div>
	</ContentContainer>
</footer>
