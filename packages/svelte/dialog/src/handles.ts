import { defineHandles } from 'packages/svelte/handles';

export const useHandles = () =>
	defineHandles({
		component: 'dialog'
	});
