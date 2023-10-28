<script lang="ts">
  let isExpanded = false;
  const clickHandler = () => {
    isExpanded = !isExpanded;
  };
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
          class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 mb-2 py-2 text-center mr-3 md:mr-0"
          type="button"
          >Profile
        </button>
        <!-- Dropdown menu -->
        {#if isExpanded}
          <div
            id="dropdown"
            class="z-10 right-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 d"
          >
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sign out</a>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </nav>
</section>
