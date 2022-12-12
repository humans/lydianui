import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		]
	]
};
