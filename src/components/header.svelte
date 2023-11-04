<script lang="ts">
  import { signOut } from '@auth/sveltekit/client';
  import type { UserSession } from '../types/userSession';

  export let session: UserSession | null;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<section class="px-8 py-2">
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            /></svg
          >
        </label>
        <!-- PHONE NAV -->
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/features">Features</a></li>
          <li><a href="/our-work">Our Work</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost normal-case text-xl">TokenNest</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <!-- WEBSITE NAV   -->
      <ul class="menu menu-horizontal px-1">
        <li><a href="/features">Features</a></li>
        <li><a href="/our-work">Our Work</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      {#if session}
        <a href="/dashboard">
          <button class="btn btn-outline btn-sm mr-2"> Dashboard </button>
        </a>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar online">
              <div class="w-10 rounded-full">
                <img alt="User Avatar" src={session?.image} />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p class="px-2 py-2 text-bold">
                {session?.name}
              </p>
              <li />
              <li>
                <a on:click={() => signOut({ callbackUrl: '/' })} href="/" class="bg-secondary"
                  >Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      {:else}
        <a href="/sign-in">
          <button class="btn btn-primary"> Sign In </button>
        </a>
      {/if}
    </div>
  </div>
</section>
