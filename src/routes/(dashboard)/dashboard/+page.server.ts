import type { PageServerLoad } from './$types';
import type { CoinData, Coins } from '../../../types/data';
export const load: PageServerLoad = async () => {
  // Use real api later https://api.coincap.io/v2/assets
  const data = await fetch('http://127.0.0.1:3000/data', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  const result = await data.json();

  const coinData: Coins[] = result.map((data: CoinData) => {
    return {
      id: data.id,
      name: data.name,
      price: parseFloat(Number(data.priceUsd).toFixed(2)),
      change24Hr: parseFloat(Number(data.changePercent24Hr).toFixed(2)),
      rank: data.rank
    };
  });
  return { coinData };
};
