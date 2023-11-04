<script lang="ts">
  import { signOut } from '@auth/sveltekit/client';
  import type { UserSession } from '../types/userSession';

  export let session: UserSession;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<section class="px-8 py-2">
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">TokenNest</a>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="User Avatar" src={session.image} />
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <p class="px-2 py-2 text-bold">
            {session.name}
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
  </div>
</section>
