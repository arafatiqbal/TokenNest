import type { PageServerLoad } from './$types';
import type { CoinData, Coins } from '../../../types/data';
import { GetCoinData } from '../../../server/crypto-api';

export const load: PageServerLoad = async () => {
  const result = await GetCoinData();

  // result.data.map for the real call
  const coinDataResults: Coins[] = result.map((data: CoinData) => {
    return {
      id: data.id,
      name: data.name,
      price: parseFloat(Number(data.priceUsd).toFixed(2)),
      change24Hr: parseFloat(Number(data.changePercent24Hr).toFixed(2)),
      rank: data.rank
    };
  });
  const coinData = coinDataResults.slice(0, 10);
  return { coinData };
};
