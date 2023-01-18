<script lang="ts">
	interface $$Props {
		events: Array<{
			name: string;
		}>;
	}

	export let events;
</script>

<div class="table [ my-12 ]">
	<header class="[ mb-2 ]">
		<h4 class="[ text-base ]">Events</h4>
	</header>

	<div class="[ overflow-x-auto w-screen -mx-8 px-8 md:mx-0 md:px-0 md:w-auto ]">
		<table class="[ text-xs w-full min-w-[600px] md:max-w-full ]">
			<thead class="[ text-neutral-600 ]">
				<tr class="[ border-b border-neutral-300 ]">
					<th class="[ w-1/2 text-left py-4 ]">Name</th>
					<th class="[ w-1/2 text-left py-4 ]">Description</th>
				</tr>
			</thead>
			<tbody>
				{#each events as event}
					<tr class="[ border-b last-of-type:border-neutral-300 ]">
						<td class="[ text-left py-4 align-baseline ]">
							<code>{event.name}</code>
						</td>
						<td class="[ text-left py-4 align-baseline ]" />
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
