import { get } from '@/content';

export async function load({ params, url }) {
	const { category, slug } = params;

	const post = get(category, slug);

	return { post };
}
