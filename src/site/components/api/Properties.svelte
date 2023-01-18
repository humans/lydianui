<script lang="ts">
	export let properties;
</script>

<div class="table [ my-12 ]">
	<header class="[ mb-2 ]">
		<h4 class="[ text-base ]">Methods</h4>
	</header>

	<div class="[ overflow-x-auto w-screen -mx-8 px-8 md:mx-0 md:px-0 md:w-auto ]">
		<table class="[ text-xs w-full min-w-[600px] md:max-w-full ]">
			<thead class="[ text-neutral-600 ]">
				<tr class="[ border-b ]">
					<th class="[ w-1/3 text-left py-4 ]">Name</th>
					<th class="[ w-1/3 text-left py-4 ]">Default</th>
					<th class="[ w-1/3 text-left py-4 ]">Description</th>
				</tr>
			</thead>
			<tbody>
				{#each properties as property}
					<tr class="[ border-b ]">
						<td class="[ text-left py-4 align-baseline ]">
							<code>{property.name}</code>
						</td>
						<td class="[ text-left py-4 align-baseline ]">
							<code>{property.default ?? ''}</code>
						</td>
						<td class="[ text-left py-4 align-baseline ]">
							<code>{property.type}</code>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
