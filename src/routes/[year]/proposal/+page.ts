import { DATA } from '../../../libs/store/data';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const res = get(DATA).find((i) => i.year === parseInt(params.year))?.data?.proposal;
	console.log(res);
	return res;
};
