<script lang="ts">
	import { page } from '$app/stores';

	export let slots;
</script>

<div class="table [ my-12 ]">
	<header class="[ mb-2 ]">
		<h4 class="[ text-base font-bold ]">Slots</h4>
	</header>

	<div class="[ overflow-x-auto w-screen -mx-8 px-8 md:mx-0 md:px-0 md:w-auto ]">
		<table class="[ text-xs w-full min-w-[600px] md:max-w-full ]">
			<thead class="[ text-neutral-600 ]">
				<tr class="[ border-b ]">
					<th class="[ w-1/2 text-left py-4 ]">Name</th>
					<th class="[ w-1/2 text-left py-4 ]">Type</th>
				</tr>
			</thead>
			<tbody>
				{#each slots as slot}
					<tr class="[ border-b ]">
						<td class="[ text-left py-4 align-baseline ]">
							<code>{slot.name}</code>
						</td>
						<td class="[ text-left py-4 align-baseline ]">
							{#if slot.link}
								<a href={`${$page.url.pathname}/${slot.link}`}>
									<code>{slot.type}</code>

									<span class="[ sr-only ]">Go to API</span>

									&#8599;
								</a>
							{:else}
								<code>{slot.type}</code>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
