---
title: Listbox
subheading: Some subheading
---

<script>
import Demo from "@components/Demo.svelte"
</script>


## Features

- Keyboard navigation
- Basic Typeahead
- Single and Multiple select


## Installation

```bash
npm install @lydianui/svelte-listbox
```


## Shape

```svelte
<script>
import { Listbox } from '@lydianui/svelte'

const fruits = [...]

const value
</script>

<Listbox.Root bind:value multiple let:listbox let:state>
    <Listbox.Button>{value.name}</Listbox.Button>
    
    <Listbox.Options>
        {#each fruits as fruit (fruit.id)}
            <Listbox.Option key={fruit.id}
                            value={fruit}
                            disabled={fruit.out_of_stock}
                            let:active
                            let:selected>
                {fruit.name}
            </Listbox.Option>
        {/each}
    </Listbox.Options>
</Listbox.Root>
```