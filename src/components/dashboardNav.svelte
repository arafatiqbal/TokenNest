<script lang="ts">
  import { signOut } from '@auth/sveltekit/client';
  import { slide } from 'svelte/transition';

  let isExpanded = false;
  const clickHandler = () => {
    isExpanded = !isExpanded;
  };
  export let session: any;
</script>

<section>
  <nav class="bg-white h-3/5 border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">TokenNest</span>
      </a>
      <div class="content-end md:order-2">
        <button
          on:click={clickHandler}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          type="button"
        >
          <img src={session.image} class="w-10 h-10 rounded" alt="Default avatar" />
        </button>
        <!-- Dropdown menu -->
        {#if isExpanded}
          <div
            transition:slide
            id="dropdown"
            class="z-10 right-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 d"
          >
            <div class="px-4 py-3 text-sm text-gray-900">
              <div>{session.name}</div>
              <div class="font-medium truncate">{session.email}</div>
            </div>
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
              <li>
                <a
                  on:click={() => signOut({ callbackUrl: '/' })}
                  href="/"
                  class="block px-4 py-2 hover:bg-gray-100">Sign out</a
                >
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </nav>
</section>
