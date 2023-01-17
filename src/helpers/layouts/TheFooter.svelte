<script>
	import ContentContainer from '@components/ContentContainer.svelte';

	export { className as class };

	let className = '';
</script>

<footer class="the-footer {className}">
	<ContentContainer size="max">
		<div class="[ pt-24 border-t flex flex-col items-center leading-relaxed space-y-0.5 ]">
			<strong class="[ text-lg tracking-tight flex space-x-px ]">
				<span class="[ font-bold ]">humans</span>
				<span class="[ font-medium text-muted ]">ph</span>
			</strong>

			<p class="[ text-sm text-muted ]">© 2023 Humans Philippines. All rights reserved.</p>
		</div>
	</ContentContainer>
</footer>
