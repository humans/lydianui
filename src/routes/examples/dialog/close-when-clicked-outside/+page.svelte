<script>
	import { onMount } from 'svelte';
	import { scale, fade } from 'svelte/transition';
	import * as Dialog from '$lib/components/dialog';

	let open = false;

	function submit() {
		console.log('axios call here to delete the repository.');

		open = false;
	}

	onMount(() => {
		setTimeout(() => (open = true), 300);
	});
</script>

<div
	class="[ flex items-center justify-center bg-gradient-to-tr bg-gradient-to-r from-yellow-400 to-orange-400 h-screen ]"
>
	<button
		on:click|preventDefault={() => (open = !open)}
		class="[ bg-black/30 text-white text-sm rounded-lg px-4 py-2 font-medium ]"
	>
		Open Dialog
	</button>

	<Dialog.Root bind:open handleClose={() => (open = false)}>
		<div
			class="[ fixed inset-0 flex items-center justify-center px-8 ]"
			transition:scale={{ start: 0.92, duration: 250 }}
		>
			<Dialog.Panel
				on:click-outside={() => (open = false)}
				class="[ max-w-[300px] w-full bg-violet-200 text-black rounded-xl relative z-50 shadow-2xl max-w-2xl overflow-hidden ]"
			>
				<div class="[ px-8 pt-6 pb-8 text-center ]">
					<div
						class="[ object-contain object-center h-28 w-28 shrink-0 overflow-hidden rounded-full mx-auto bg-violet-700 ]"
					>
						<img src="https://thispersondoesnotexist.com/image" class="[ h-full w-full ]" />
					</div>

					<div class="[ mt-3 ]">
						<h2 class="[ text-lg font-bold tracking-tight ]">Doesn't Exist</h2>
						<div class="[ tracking-tight ]">Principal Designer</div>
						<div class="[ tracking-tight ]">Manila, Philippines</div>
					</div>
				</div>

				<div class="[ bg-violet-300 text-black px-6 py-5 flex flex-col space-y-1.5 font-medium ]">
					<a href="#" class="[ text-center px-4 py-1.5 rounded-md bg-white/25 hover:bg-black/10 ]">
						Ping them
					</a>
					<a href="#" class="[ text-center px-4 py-1.5 rounded-md hover:bg-black/10 ]">
						See their assignments
					</a>
					<a href="#" class="[ text-center px-4 py-1.5 rounded-md hover:bg-black/10 ]">
						See what they've been up to
					</a>
				</div>
			</Dialog.Panel>
		</div>
	</Dialog.Root>
</div>
