<script>
	import NavigationPopover from './NavigationPopover.svelte';
</script>

<div class="[ bg-gradient-to-br from-indigo-600 to-cyan-500 h-screen ]">
	<header class="[ py-4 px-10 flex space-x-4 ]">
		{#each Array(4) as _}
			<NavigationPopover />
		{/each}
	</header>
</div>
