<script lang="ts">
	import DocPage from '$helpers/layouts/DocsPage.svelte';
	import { afterNavigate } from '$app/navigation';

	export let data;

	let post = data.post;

	afterNavigate(() => {
		post = data.post;
	});
</script>

<DocPage {post} />
