export type CoinData = {
  id?: string;
  rank?: string;
  symbol?: string;
  name?: string;
  supply?: string;
  maxSupply?: string;
  marketCapUsd?: string;
  volumeUsd24Hr?: string;
  priceUsd?: string;
  changePercent24Hr?: string;
  vwap24Hr?: string;
};

export type Coins = {
  id?: string;
  name?: string;
  price?: float;
  change24Hr?: float;
};
