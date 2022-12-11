import type { RequestHandler } from '@sveltejs/kit';
import { fuzzy } from '$lib/helpers/collections';
import { people } from '$helpers/factories';

export const GET: RequestHandler = ({ url }) => {
	let filteredPeople = [];

	if (!url.searchParams.get('q')) {
		filteredPeople = people;
	} else {
		filteredPeople = fuzzy(people, 'name', url.searchParams.get('q') ?? '');
	}

	return new Response(JSON.stringify(filteredPeople), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
