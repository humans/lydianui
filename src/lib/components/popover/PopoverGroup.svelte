<script context="module" lang="ts">
	export const PopoverGroupContextKey = Symbol();
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PopoverGroupState } from '$lib/components/popover/types';
	import { defineStore } from '$lib/store';

	interface $$Props {
		as: string;
		[key: string]: any;
	}

	export let as = 'div';

	const usePopoverGroup = () =>
		defineStore({
			state: {
				popovers: []
			},
			actions: {
				register({ popovers }, popover) {
					if (popovers.includes(popover)) {
						return;
					}

					this.$change({
						popovers: [...popovers, popover]
					});
				}
			}
		});

	const group = usePopoverGroup();

	setContext(PopoverGroupContextKey, {
		group
	});
</script>

<svelte:element this={as} {...$$restProps}>
	<slot />
</svelte:element>
