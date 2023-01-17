<script>
	import Logo from '@icons/Logo.svelte';
</script>

<header
	class="the-header [ h-[5rem] flex fixed top-0 left-0 right-0 w-full supports-[backdrop-filter]:bg-canvas/50 bg-canvas backdrop-blur z-10 ]"
>
	<div class="[ max-w-[90rem] w-full mx-auto px-8 flex items-center ]">
		<div class="[ md:w-64 flex-items-center shrink-0 ]">
			<div class="[ flex items-center space-x-3 ]">
				<div class="the-header__logo">
					<a href="/">
						<Logo class="[ h-[1.375rem] ]" />
						<span class="[ sr-only ]">lydian</span>
					</a>
				</div>

				<span
					class="[ bg-neutral-100 px-1.5 py-0.5 leading-4 text-[10px] tracking-tighter uppercase rounded-md font-bold ]"
					aria-hidden="true"
				>
					alpha
				</span>
			</div>
		</div>

		<div class="[ hidden sm:flex justify-end items-center w-full ]">
			<ul class="[ flex space-x-8 text-sm ]">
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
	</div>
</header>
