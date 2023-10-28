import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const res = await fetch('http://127.0.0.1:3000/data', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  const item = await res.json();
  console.log(item);
  return { item };
};
