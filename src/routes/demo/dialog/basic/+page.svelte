<script>
	import Trash from '@icons/retro/Trash.svelte';
</script>

<div class="[ bg-[#f8d8d5] h-screen w-screen flex items-center justify-center ]">
	<button type="">What's up?</button>
</div>

<div class="[ h-screen w-screen fixed inset-0 flex items-center justify-center ]">
	<div
		class="[ bg-[#fff8ef] font-bold shadow-retro border border-black border-4 max-w-[80%] w-full ]"
	>
		<header class="[ text-center border-b-4 border-black py-2 px-8 ]">
			<h1 class="[ font-extrabold uppercase tracking-wider ]">!!! Delete forever !!!</h1>
		</header>

		<div class="[ flex space-x-4 px-8 py-4 pt-6 ]">
			<div>
				<div class="[ bg-[#c1e4e1] p-2 border-2 border-black mt-1.5 ]">
					<Trash class="[ h-8 w-8 text-black ]" />
				</div>
			</div>
			<div>
				<p class="[ font-medium tracking-tight ]">
					Are you sure you want to delete this file? The file can never be recovered.
				</p>
			</div>
		</div>
		<footer class="[ flex justify-end space-x-4 px-8 py-4 pb-6 ]">
			<button class="[ border border-2 border-black px-4 py-1.5 text-sm hover:bg-black/10 ]">
				Never mind
			</button>
			<button
				class="[ border border-2 border-black bg-[#f72740] bg-[#f72740] hover:bg-[#DD0822] text-white px-4 py-1.5 text-sm ]"
			>
				Yes, go and delete
			</button>
		</footer>
	</div>
</div>
