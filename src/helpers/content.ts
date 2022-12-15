interface PostData {
	title: string;
	byline?: string;
}

export async function get(category: string, slug: string) {
	const { default: body, metadata } = await import(`../content/docs/${category}/${slug}.svelte.md`);

	const { title, byline } = metadata as PostData;

	return {
		title,
		byline,
		slug,
		body
	};
}
