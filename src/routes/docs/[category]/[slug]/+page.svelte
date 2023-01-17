<script lang="ts">
	import '../../../../css/app.css';
	import DocPage from '@layouts/DocsPage.svelte';
	import DocsLayout from '@layouts/DocsLayout.svelte';
	import { afterNavigate } from '$app/navigation';

	export let data;

	let post = data.post;

	afterNavigate(() => {
		post = data.post;
	});
</script>

<DocsLayout examples={post.examples ?? []}>
	<DocPage {post} />
</DocsLayout>
