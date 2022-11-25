# Discovery

- How do we handle `closeOnClickOutisde`?
  - Svelte Context?
- Aria Labels?
  - Svelte Context?

```sveltehtml
<script>
    import { writable } from "svelte/store"
    import { Dialog, DialogOverlay, DialogPanel } from "@lydianui/svelte"

    let open = writable(false)

    function submit() {
        console.log("axios call here to delete the repository.")

        $open = false
    }
</script>

<button on:click={() => ($open = true)}>Delete the thing</button>

<Dialog {open} let:close class="[ fixed flex items-center justify-center h-screen w-screen ]">
    <DialogOverlay class="[ absolute inset-0 bg-neutral-200/10 backdrop-blur ]" />

    <DialogPanel
            class="[ border bg-neutral-50 rounded-xl px-8 py-6 relative z-50 shadow-2xl shadow-neutral-600/10 max-w-2xl ]"
    >
        <h2 class="[ text-lg font-bold ]">Are you sure you want to delete this repository?</h2>

        <div class="[ mt-4 ]">
            <p>Deleting this repository will remove all access and backups to this project. This is irreversible.</p>
        </div>

        <footer class="[ flex justify-end space-x-4 mt-6 ]">
            <button type="button" on:click={close} class="[ font-medium text-sm rounded-md bg-neutral-200 px-4 py-2 ]">
                Close
            </button>

            <form action="/repositories" on:submit|preventDefault={submit}>
                <button type="submit" class="[ font-medium text-sm rounded-md bg-red-700 text-white px-4 py-2 ]">
                    Yes, delete
                </button>
            </form>
        </footer>
    </DialogPanel>
</Dialog>
```
