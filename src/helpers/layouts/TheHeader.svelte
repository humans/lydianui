<script>
	import ContentContainer from '@components/ContentContainer.svelte';
</script>

<header
	class="the-header [ h-[4.5rem] flex fixed top-0 left-0 right-0 w-full bg-canvas/50 backdrop-blur z-10 ]"
>
	<ContentContainer size="max" class="[ flex items-center ]">
		<div class="[ md:w-64 flex-items-center shrink-0 ]">
			<div class="the-header__logo">
				<a href="/" class="[ font-black ]">lydianui</a>
			</div>
		</div>

		<div class="[ hidden sm:flex justify-end items-center w-full ]">
			<ul class="[ flex space-x-6 text-sm ]">
				<li>
					<a
						href="/docs/overview/getting-started"
						class="[ text-muted hover:text-white transition ]">Docs</a
					>
				</li>
				<li><a href="" class="[ text-muted hover:text-white transition ]">API</a></li>
				<li><a href="" class="[ text-muted hover:text-white transition ]">Plugins</a></li>
				<li><a href="" class="[ text-muted hover:text-white transition ]">Case Studies</a></li>
			</ul>
		</div>
	</ContentContainer>
</header>
