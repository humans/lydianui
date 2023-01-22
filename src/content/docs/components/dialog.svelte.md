---
title: Dialog
subheading: This is some description about the dialog component.
---

<script lang="ts">
import Callout from '@components/Callout.svelte';
import Demo from '@components/Demo.svelte';
import * as Api from '@components/api';
</script>

<Demo src="/demo/dialog/basic" />

<Callout title="About the dialog's default behavior">
Some description about clicking the backdrop will have to be coded manually since native dialogs
don't close by default.
</Callout>

## Features
- First
- Second
- Third
- Fourth

## Installation

```bash
npm install --save @lydianui/svelte-dialog
```

## Shape
Here's how your wrapped Dialog would look like in your project.

```svelte
<script>
  import * as Dialog from '@lydianui/svelte-dialog'
  
  export let open = false
  export let { className as class }
  
  let className = ''
</script>

<Dialog.Root class="dialog {className}" {...$$restProps} bind:open let:dialog>
  <Dialog.Overlay class="dialog__overlay" on:click={dialog.close} />
  
  <Dialog.Panel class="dialog__panel">
    <slot />
  </Dialog.Panel>
</Dialog.Root>
```


## API Reference

### `Dialog.Root`
The description about the root component of the dialog.

<Api.Events events={[
  { name: 'on:mount', description: 'The component is mounted.' },
  { name: 'on:open', description: 'After the dialog opens.' },
  { name: 'on:close', description: 'After the dialog closes.' },
]} />

<Api.Properties properties={[
    { name: 'open', type: 'boolean', description: 'Some description about this property.' },
]} />

<Api.Methods title="let:dialog" methods={[
    { name: 'open', description: 'Open the dialog.' },
    { name: 'close', description: 'Close the dialog.' },
    { name: 'toggle', description: 'Toggle the dialog.' },
]} />

### `Dialog.Overlay`
The description about the overlay component of the dialog.

### `Dialog.Panel`
The description about the panel component of the dialog.

<Api.Events events={[
{ name: 'on:click-outside', description: 'Clicked outside the panel.' },
]} />
