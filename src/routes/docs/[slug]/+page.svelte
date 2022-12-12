<script lang="ts">
	import ArticlePage from '$helpers/layouts/DocsPage.svelte';

	export let data;

	const { post } = data;
</script>

<ArticlePage {post} />
