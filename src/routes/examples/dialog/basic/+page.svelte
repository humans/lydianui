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
	class="[ flex items-center justify-center bg-gradient-to-tr bg-gradient-to-r from-sky-400 to-indigo-500 h-screen ]"
>
	<button
		on:click|preventDefault={() => (open = !open)}
		class="[ bg-black/30 text-white text-sm rounded-lg px-4 py-2 font-medium ]"
	>
		Open Dialog
	</button>

	<Dialog.Root bind:open handleClose={() => (open = false)}>
		<div transition:fade={{ duration: 100 }}>
			<Dialog.Overlay class="[ fixed inset-0 bg-neutral-200/25 backdrop-blur ]" />
		</div>

		<div
			class="[ fixed inset-0 flex items-center justify-center px-8 ]"
			transition:scale={{ start: 0.92, duration: 250 }}
		>
			<Dialog.Panel
				class="[ w-[500px] border bg-neutral-50 rounded-xl px-8 py-6 relative z-50 shadow-2xl shadow-neutral-600/10 max-w-2xl ]"
			>
				<h2 class="[ text-base font-bold ]">Are you sure you want to delete this repository?</h2>

				<div class="[ mt-1 text-sm leading-relaxed text-neutral-700 ]">
					<p>
						Deleting this repository will remove all access and backups to this project. This is
						irreversible.
					</p>
				</div>

				<footer class="[ flex justify-end space-x-4 mt-8 ]">
					<button
						type="button"
						on:click={() => (open = false)}
						class="[ font-medium text-sm rounded-md bg-neutral-200 px-4 py-1.5 ]"
					>
						Never mind
					</button>

					<form action="/repositories" on:submit|preventDefault={submit}>
						<button
							type="submit"
							class="[ font-medium text-sm rounded-md bg-red-700 text-white px-4 py-1.5 ]"
						>
							Yes, delete
						</button>
					</form>
				</footer>
			</Dialog.Panel>
		</div>
	</Dialog.Root>
</div>
