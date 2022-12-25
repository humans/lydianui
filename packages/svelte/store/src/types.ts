import type { Writable } from 'svelte/store';

export type Store<State, Actions> = Writable<State> & Actions;

export type ActionsWithContext<State, Actions> = {
	[key: string]: (
		this: Actions & {
			$change: (state: Partial<State>) => void;
		},

		state: State,

		...rest: any
	) => any;
};

export type StoreDefinition<State, Actions> = {
	state: State;
	actions: ActionsWithContext<State, Actions>;
};
