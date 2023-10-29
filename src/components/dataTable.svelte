<script lang="ts">
  import type { Coins } from '../types/data';
  export let coinData: Coins[];
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
  <div class="bg-white m-4">
    <label for="table-search" class="sr-only">Search</label>
    <div class="flex justify-between mx-auto p-4">
      <h1 class="px-5 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl">
        Dashboard
      </h1>
      <div class="relative mt-1">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for items"
        />
      </div>
    </div>
  </div>
  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3"> Coin </th>
        <th scope="col" class="px-6 py-3"> Price </th>
        <th scope="col" class="px-6 py-3"> Change (24h) </th>
        <th scope="col" class="px-6 py-3"> Action </th>
      </tr>
    </thead>
    <tbody>
      {#each coinData as coin}
        <tr class="bg-white border-b">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {coin.name}
          </th>
          <td class="px-6 py-4"> $ {coin.price} </td>
          <td class="px-6 py-4"> {coin.change24Hr} %</td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 hover:underline">View Graph</a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
