<script lang="ts">
	export let methods;
</script>

<div class="table [ my-12 ]">
	<div class="[ overflow-x-auto w-screen -mx-8 px-8 md:mx-0 md:px-0 md:w-auto ]">
		<table class="[ text-xs w-full min-w-[600px] md:max-w-full ]">
			<thead class="[ text-neutral-600 ]">
				<tr class="[ border-b border-neutral-300 ]">
					<th class="[ w-1/2 text-left py-4 ]">Name</th>
					<th class="[ w-1/2 text-left py-4 ]">Description</th>
				</tr>
			</thead>
			<tbody>
				{#each methods as method}
					<tr class="[ border-b last-of-type:border-neutral-300 ]">
						<td class="[ text-left py-4 align-baseline ]">
							<code>{method.name}</code>
						</td>
						<td class="[ text-left py-4 align-baseline ]" />
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
