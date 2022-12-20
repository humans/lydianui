import { defineStore } from '$lib/store';
import { createUniqueId } from '$lib/helpers/create-unique-id';

export const useA11y = (config) =>
	defineStore({
		state: {
			ids: [],
			...config
		},
		actions: {
			$find({ ids }, key) {
				return ids.find((id) => id.key === key);
			},

			$create({ ids, name }, key) {
				let uuid = { key, id: createUniqueId() };

				this.$change({ ids: [...ids, uuid] });

				return uuid;
			},

			$toString({ name }, uuid) {
				return `lydian--${name}-${uuid.key}--:${uuid.id}:`;
			},

			first({ name }, key) {
				let uuid = this.$find(key);

				if (!uuid) {
					uuid = this.$create(key);
				}

				return this.$toString(uuid);
			},

			new({ name }, key) {
				return this.$toString(this.$create(key));
			}
		}
	});
