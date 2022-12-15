---
title: Dialog
byline: This is some description about the dialog component.
layout: docs
---

<script lang="ts">
import Callout from '$helpers/components/Callout.svelte';
import Demo from '$helpers/components/Demo.svelte';
import PropertyTable from '$helpers/components/PropertyTable.svelte';
import ApiTable from '$helpers/components/ApiTable.svelte';
</script>

<Demo src="/examples/dialog/basic" />

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

## Anatomy

```svelte
<script>
  import { Dialog, DialogOverlay, DialogPanel } from '@lydianui'
  
  export { className as class }
  let className
</script>

<Dialog class="dialog {className}" {...$$restProps}>
  <DialogOverlay class="dialog__overlay" />
  
  <DialogPanel class="dialog__panel">
    <!-- ... -->
  </DialogPanel>
</Dialog>
```



## API Reference

### `let:dialog`

<ApiTable properties={[
    { name: 'open', description: 'Open the dialog.' },
    { name: 'close', description: 'Open the dialog.' },
    { name: 'toggle', description: 'Open the dialog.' },
]} />

### `Dialog.Root`

<PropertyTable properties={[
    { name: 'open', type: 'boolean', description: 'Some description about this property.' },
  ]} />


### `Dialog.Overlay`


### `Dialog.Panel`