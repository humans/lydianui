<script lang="ts">
	import '../../../../css/app.css';
	import DocPage from '$helpers/layouts/DocsPage.svelte';
	import { afterNavigate } from '$app/navigation';
	import DocsLayout from '$helpers/layouts/DocsLayout.svelte';

	export let data;

	let post = data.post;

	afterNavigate(() => {
		post = data.post;
	});
</script>

<DocsLayout examples={post.examples ?? []}>
	<DocPage {post} />
</DocsLayout>
