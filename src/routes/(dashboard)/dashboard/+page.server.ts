import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // Use real api later https://api.coincap.io/v2/assets
  const data = await fetch('http://127.0.0.1:3000/data', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  const coinData = await data.json();
  return { coinData };
};
