<script>
	import ContentContainer from '@components/ContentContainer.svelte';

	export { className as class };

	let className = '';
</script>

<footer class="the-footer [ pb-36 ] {className}">
	<ContentContainer size="max">
		<div class="[ h-px bg-gradient-to-r from-muted/5 via-muted/60 to-muted/5$ ]" />

		<div class="[ pt-12 flex flex-col items-center leading-relaxed space-y-1 ]">
			<a href="https://humans.ph" target="_blank">
				<strong class="[ text-lg tracking-tight flex space-x-px ]">
					<span class="[ font-bold ]">humans</span>
					<span class="[ font-medium text-muted ]">ph</span>
				</strong>
			</a>

			<p class="[ text-sm text-muted ]">© 2023 Humans Philippines. All rights reserved.</p>
		</div>
	</ContentContainer>
</footer>
