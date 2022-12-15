<script lang="ts">
	export let properties;
</script>

<div class="table [ overflow-x-auto w-full ]">
	<table class="[ text-sm w-full min-w-[540px]  ]">
		<thead>
			<tr class="[ border-b ]">
				<th class="[ w-1/6 text-left py-3 ]">Property</th>
				<th class="[ w-2/3 text-left py-3 ]">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each properties as property}
				<tr class="[ border-b ]">
					<td class="[ text-left py-3 align-baseline ]">
						<span class="[ font-code ]">{property.name}</span>
					</td>
					<td class="[ text-left py-3 align-baseline ]">
						<p>{property.description}</p>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
