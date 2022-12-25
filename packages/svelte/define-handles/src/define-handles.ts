import { defineStore } from '@lydianui/svelte-define-store';
import type { HandleActions, HandleConfig, HandleElement, HandleState } from './types';

let id = 1;

function next() {
	return id++;
}

function toLabel(component: string, element: HandleElement) {
	return `lydian--${component}-${element.name}--:${element.id}:`;
}

export const defineHandles = (config: HandleConfig) =>
	defineStore<HandleState, HandleActions>({
		state: {
			elements: [],

			find(name) {
				const element = this.elements.find((element) => element.name === name);

				if (!element) {
					return null;
				}

				return toLabel(config.component, element);
			},

			list(name) {
				const elements = this.elements.filter((element) => element.name === name);

				if (elements.length === 0) {
					return null;
				}

				return elements.map((element) => toLabel(config.component, element)).join(' ');
			},

			...config
		},

		actions: {
			$find({ elements }, name) {
				return elements.find((element) => element.name === name);
			},

			$create({ elements }, name) {
				let element = {
					name,
					id: next()
				};

				this.$change({
					elements: [...elements, element]
				});

				return element;
			},

			$id({ component }, element) {
				return toLabel(component, element);
			},

			firstOrNew(_, name) {
				let element = this.$find(name) ?? this.$create(name);

				return this.$id(element);
			},

			new(_, name) {
				const element = this.$create(name);

				return this.$id(element);
			}
		}
	});
