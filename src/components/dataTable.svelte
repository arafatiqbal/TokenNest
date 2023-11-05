<script lang="ts">
  import type { Coins } from '../types/data';
  export let coinData: Coins[];

  let getColor = (changeValue: number) => {
    if (changeValue > 0) return 'text-success';
    if (changeValue < 0) return 'text-error';
    return;
  };
  console.log(coinData);
</script>

<!-- svelte-ignore a11y-misplaced-scope -->
<div class="relative overflow-x-auto shadow-xl sm:rounded-lg w-11/12">
  <div class="overflow-x-auto">
    <h1 class="text-2xl font-bold text-center pb-10">Top 10 Coins</h1>
    <table class="table">
      <thead>
        <tr>
          <th />
          <th scope="col" class="py-3"> Coin </th>
          <th scope="col" class="py-3"> Price </th>
          <th scope="col" class="py-3"> Change (24h) </th>
        </tr>
      </thead>
      <tbody>
        {#each coinData as coin}
          <tr class="hover">
            <th>{coin.rank}</th>
            <td scope="row">
              {coin.name}
            </td>
            <td> ${coin.price} </td>
            <td class={`${getColor(coin.change24Hr)}`}> {coin.change24Hr} %</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
