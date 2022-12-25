<script>
	// import * as Dialog from '@lydianui/svelte-dialog';
	import { clickOutside } from 'packages/svelte/utilities';

	export const prerender = true;
</script>

<svelte:head>
	<title>Lydian UI</title>
</svelte:head>

<h1>Lydian UI</h1>

<div class="[ bg-red-400 p-12 ]" use:clickOutside on:click-outside={() => console.error('outside')}>
	Hello
</div>

<!--<Dialog.Root open let:dialog>-->
<!--	<Dialog.Panel on:click-outside={dialog.close}>-->
<!--		<Dialog.Title>This is a title</Dialog.Title>-->
<!--		<Dialog.Description>-->
<!--			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias deleniti-->
<!--			dolores eaque est eum facilis inventore iusto laborum libero quibusdam, quidem quis quod sed-->
<!--			sunt tempore ut vero?-->
<!--		</Dialog.Description>-->
<!--		<Dialog.Description>-->
<!--			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias deleniti-->
<!--			dolores eaque est eum facilis inventore iusto laborum libero quibusdam, quidem quis quod sed-->
<!--			sunt tempore ut vero?-->
<!--		</Dialog.Description>-->
<!--	</Dialog.Panel>-->
<!--</Dialog.Root>-->
