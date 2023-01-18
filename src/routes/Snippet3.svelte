<script>
	import Prism from 'prismjs';
	import 'prism-svelte';
	import loadLanguages from 'prismjs/components/';
	import { onMount } from 'svelte';

	loadLanguages(['svelte']);

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div
	class="prose  [ transition motion-safe:will-change-transform motion-safe:hover:-translate-y-px hover:shadow-2xl hover:shadow-accent-base/20 rounded-xl ]"
>
	<pre class="language-svelte" tabindex="-1"><code
			class="language-svelte [ leading-[2] text-[13px] tracking-tight ]"
			>This is the third snippet</code
		></pre>
</div>
