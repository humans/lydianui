import { get } from '$helpers/content';

export async function load({ params, url }) {
	const { slug } = params;

	const post = get('docs', slug);

	return { post };
}
