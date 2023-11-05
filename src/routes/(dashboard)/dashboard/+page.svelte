<script lang="ts">
  import { onMount } from 'svelte';
  import DataTable from '../../../components/dataTable.svelte';
  import type { PageData } from './$types';
  export let data: PageData;

  let context = 'crypto';
  function setContext(desiredContext: string) {
    context = desiredContext;
  }

  onMount(() => {
    // Get the container element
    let btnContainer = document.getElementById('menu');
    // Get all buttons with class="btn" inside the container
    if (btnContainer) {
      let btns = btnContainer.getElementsByClassName('button');
      // Loop through the buttons and add the active class to the current/clicked button
      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function (this: HTMLElement) {
          let current = document.getElementsByClassName('btn-active');
          current[0].setAttribute('class', 'button');
          this.setAttribute('class', 'btn-active btn-secondary');
        });
      }
    }
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <!-- Page content here -->
    {#if context === 'crypto'}
      <!-- content here -->
      <DataTable coinData={data.coinData} />
    {/if}
    {#if context === 'stock'}
      <h1>HEloooo</h1>
    {/if}
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay" />
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <ul id="menu" class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li>
        <a class="button btn-active btn-secondary" on:click={() => setContext('crypto')}>Crypto</a>
      </li>
      <li><a class="button" on:click={() => setContext('stock')}>Stock</a></li>
    </ul>
  </div>
</div>
