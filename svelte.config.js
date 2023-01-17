import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build'
		}),
		alias: {
			/**
			 * @ -> Svelte Kit aliases
			 */
			'@': 'src/site',
			'@components': 'src/site/components',
			'@layouts': 'src/site/layouts',
			'@icons': 'src/site/icons',
			'@factories': 'src/site/factories',

			/**
			 * @ -> Package aliases
			 */
			$helpers: 'src/helpers'
		}
	}
};

export default config;
