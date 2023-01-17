---
title: Combobox
subheading: Some description on when to use a combobox.

examples:
    - text: Autocomplete (Single Value)
      link: /playground/combobox#example--autocomplete--single-value
    - text: Autocomplete (Multiple Values)
      link: /playground/combobox#example--autocomplete--multiple-values
    - text: Command Palette
      link: /playground/combobox#example--command-palette
---

<script lang="ts">
import Callout from '@components/Callout.svelte';
import Demo from '@components/Demo.svelte';
import * as Api from '@components/api';
</script>

<Demo src="/examples/combobox/autocomplete" />


## Features 
This is some copy text for the features this component provides.

- Keyboard navigation
- Single value selection
- Multiple value selection

## Installation

```bash
npm install --save @@lydianui/svelte-combobox
```

## Shape
Here's how a combobbox would look like in your project.

```svelte
<script>
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
             disabled={item.disabled}
        >
          {item.name}
        </div>
      </Combobox.Option>
    {/each}
  </Combobox.Options>
</Combobox.Root>
```


## Components

### `<Combobox.Root>`

<Api.Properties properties={[
    { name: 'as',       type: 'string',  default: '"div"' },
    { name: 'value',    type: 'any',     default: 'null'  },
    { name: 'multiple', type: 'boolean', default: 'false' },
]} />

<Api.Events events={[
    { name: 'on:open' },
    { name: 'on:close' },
    { name: 'on:click-outside' },
    { name: 'on:mount' },
]} />

<Api.Slots slots={[
{ name: 'let:combobox', type: 'ComboboxActions', link: '#combobox-actions' },
{ name: 'let:state',    type: 'ComboboxState',   link: '#combobox-state' },
]} />

### `<Combobox.Input>`
Something about the input. There isn't any default search behavior. The package includes a
bare bones `fuzzy` function that's usable for simple stuff. Use `fuse.js` for more complex in-memory
autocompletes, or use an API.
- [Using a searching library like fuse.js](#)
- [Using an API for autocomplete](#)

<Api.Events events={[
{ name: 'on:escape' },
{ name: 'on:mount' },
{ name: 'on:keydown' },
{ name: 'on:input' },
]} />


### `<Combobox.Options>`
The option is the thing that groups together all the options.

### `<Combobox.Option>`
Some blurb about the option being the thing that is selected.

<Api.Properties properties={[
{ name: 'as',       type: 'string',  default: '"div"' },
{ name: 'value',    type: 'any',     default: 'null'  },
{ name: 'key',      type: 'any' },
{ name: 'disabled', type: 'boolean', default: 'false' },
]} />

<Api.Slots slots={[
{ name: 'let:active',   type: 'boolean' },
{ name: 'let:selected', type: 'boolean' },
]} />


## API

### `Combobox State`
Some blurb on why users would use this.

<Api.Methods methods={[
{ name: 'open', type: 'boolean', default: false },
{ name: 'multiple', type: 'boolean', default: false },
]} />


### `Combobox Actions`
Here are all the public API that users can expect to remain stable.

<Api.Methods methods={[
{ name: 'select(value: any): void' },
{ name: 'selected(value: any): boolean' },
{ name: 'focus(): void' },
{ name: 'open(): void' },
{ name: 'close(): void' },
{ name: 'toggle(): void' },
]} />
