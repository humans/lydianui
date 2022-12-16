interface PostData {
	title: string;
	byline?: string;
	examples?: {
		text: string;
		link: string;
	}[];
}

export async function get(category: string, slug: string) {
	const { default: body, metadata } = await import(`../content/docs/${category}/${slug}.svelte.md`);

	const { title, byline, examples } = metadata as PostData;

	return {
		title,
		byline,
		examples,
		slug,
		body
	};
}
