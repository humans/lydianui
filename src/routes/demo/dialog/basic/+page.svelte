<script>
	import * as Dialog from '$lib/components/dialog';
	import { fade, fly } from 'svelte/transition';
	import Trash from '@icons/retro/Trash.svelte';
	import { onMount } from 'svelte';

	let open = false;

	onMount(() => {
		setTimeout(() => (open = true), 400);
	});
</script>

<div class="[ bg-[#f8d8d5] h-screen w-screen flex items-center justify-center ]">
	<button
		type="button"
		class="[ px-5 py-2.5 bg-[#fff8ef] border-4 font-bold border-black tracking-tight ]"
		on:click|preventDefault={() => (open = !open)}
	>
		Delete 5 files
	</button>
</div>

{#if open}
	<Dialog.Root
		bind:open
		class="[ h-screen w-screen fixed inset-0 flex items-center justify-center ]"
	>
		<div transition:fade={{ duration: 300 }}>
			<Dialog.Overlay class="[ fixed inset-0 bg-black/25 ]" />
		</div>

		<div
			transition:fly={{ y: -10, duration: 150 }}
			class="[ bg-[#fff8ef] font-bold shadow-retro border border-black border-4 max-w-[80%] w-full z-10 ]"
		>
			<Dialog.Panel>
				<header class="[ text-center border-b-4 border-black py-2 px-8 ]">
					<Dialog.Title as="h1" class="[ font-extrabold uppercase tracking-wider ]"
						>!!! Delete forever !!!</Dialog.Title
					>
				</header>

				<div
					class="[ flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 px-8 py-4 pt-6 ]"
				>
					<div>
						<div class="[ inline-flex bg-[#c1e4e1] p-2 border-2 border-black mt-1.5 ]">
							<Trash class="[ h-8 w-8 text-black ]" />
						</div>
					</div>
					<div>
						<Dialog.Description class="[ font-medium tracking-tight ]">
							Are you sure you want to delete this file? The file can never be recovered.
						</Dialog.Description>
					</div>
				</div>
				<footer
					class="[ flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-end sm:space-x-4 px-8 py-4 pb-6 ]"
				>
					<button
						class="[ border border-2 border-black px-4 py-1.5 text-sm hover:bg-black/10 ]"
						on:click|preventDefault={() => (open = false)}
					>
						Never mind
					</button>
					<button
						class="[ border border-2 border-black bg-[#f72740] bg-[#f72740] hover:bg-[#DD0822] text-white px-4 py-1.5 text-sm ]"
						on:click|preventDefault={() => (open = false)}
					>
						Yes, go and delete
					</button>
				</footer>
			</Dialog.Panel>
		</div>
	</Dialog.Root>
{/if}
