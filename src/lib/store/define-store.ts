import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { ActionsWithContext, Store, StoreDefinition } from './types';

function defineChange<State>({ update }: Writable<State>) {
	return (data: Partial<State>) =>
		update(($store: State) => {
			$store = { ...$store, ...data };

			return $store;
		});
}

function buildActions<State, Actions>(
	$actions: ActionsWithContext<State, Actions>,
	store: Writable<State>
): Actions {
	function applyContextToCallback(callback: (state: State, ...rest: any) => any, ...rest: any) {
		return callback.bind({
			$change: defineChange(store),
			...actions
		})(get(store), ...rest);
	}

	const actions = Object.fromEntries(
		Object.entries($actions).map(function ([key, callback]) {
			return [key, (...rest: any) => applyContextToCallback(callback, ...rest)];
		})
	);

	// @ts-ignore
	return actions;
}

type Callback<State> = (state: Writable<State>) => any;

export function defineStore<State, Actions>(
	data: StoreDefinition<State, Actions>,
	onStart: Callback<State> = () => {}
): Store<State, Actions> {
	const { state: $state, actions: $actions } = data;

	const store = writable($state);

	onStart(store);

	return {
		...store,
		...buildActions($actions, store)
	};
}
