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
			>{`<script>
  import { Combobox } from '@lydianui/svelte'

  export let value
</script>

<Combobox.Root class="combobox" let:combobox>
  <Combobox.Input class="combobox__input" on:escape={comboobox.close} />

  <Combobox.Options class="combobox__options">
    {#each items as item (item.id)}
      <Combobox.Option value={item} let:selected let:active>
        <div class="combobox__option"
             class:combobox__option--seleted={selected}
             class:combobox__option--active={active}
             disabled={item.disabled}>
          {item.name}
        </div>
      </Combobox.Option>
    {/each}
  </Combobox.Options>
</Combobox.Root>`}</code
		></pre>
</div>
