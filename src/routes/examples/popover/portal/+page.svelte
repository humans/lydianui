<script>
	import { Popover } from '$lib';
	import NavigationPopover from './NavigationPopover.svelte';
</script>

<div class="[ bg-gradient-to-br from-indigo-600 to-cyan-500 h-screen ]">
	<header class="[ py-4 px-10 flex space-x-4 ]">
		{#each Array(4) as _}
			<NavigationPopover />
		{/each}
	</header>

	<div>
		<div id="navigation-popovers" class="[ bg-yellow-300 p-4 fixed bottom-0 w-full ]">
			<span class="[ text-black text-center font-bold tracking-tight block ]">
				The navigation popovers are sent here using
				<code
					class="[ font-code text-[13px] font-extrabold bg-black/10 px-2 py-0.5 rounded-md text-yellow-900 ]"
				>
					svelte-portal
				</code>
			</span>
		</div>
	</div>
</div>
