<script lang="ts">
  import type { Coins } from '../types/data';
  export let coinData: Coins[];
</script>

<!-- svelte-ignore a11y-misplaced-scope -->
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 lg:mx-96">
  <div class="overflow-x-auto">
    <h1 class="text-5xl font-bold text-center pb-10">Dashboard</h1>
    <table class="table">
      <thead>
        <tr>
          <th />
          <th scope="col" class="px-6 py-3"> Coin </th>
          <th scope="col" class="px-6 py-3"> Price </th>
          <th scope="col" class="px-6 py-3"> Change (24h) </th>
          <th scope="col" class="px-6 py-3"> Action </th>
        </tr>
      </thead>
      <tbody>
        {#each coinData as coin}
          <tr class="hover">
            <th>{coin.rank}</th>
            <td scope="row">
              {coin.name}
            </td>
            <td> $ {coin.price} </td>
            <td> {coin.change24Hr} %</td>
            <td>
              <a href="/graph">View Graph</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
