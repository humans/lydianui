interface PostData {
	title: string;
	subheading?: string;
	examples?: {
		text: string;
		link: string;
	}[];
}

export async function get(category: string, slug: string) {
	const { default: body, metadata } = await import(`../content/docs/${category}/${slug}.svelte.md`);

	const { title, subheading, examples } = metadata as PostData;

	return {
		title,
		subheading,
		examples,
		slug,
		body
	};
}
