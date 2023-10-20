<script lang="ts">
</script>

<!-- Remove this and comment below when links are added, this is to make lint happy -->
<!-- svelte-ignore a11y-invalid-attribute -->
<section>
	<nav class="bg-white border-gray-200">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<a href="" class="flex items-center">
				<span class="self-center text-2xl font-semibold whitespace-nowrap">TokenNest</span>
			</a>
			<div class="flex md:order-2">
				<a
					type="button"
					class="block py-2 mx-3 pl-3 pr-4 m-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0"
					href="/login">Login</a
				>
				<a
					type="button"
					href="/signup"
					class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
					data-sveltekit-preload-data="tap">Get started</a
				>
			</div>
			<div
				class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
				id="navbar-cta"
			>
				<ul
					class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
				>
					<li>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0"
							aria-current="page">Home</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0"
							>About</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0"
							>Services</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0"
							>Contact</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</section>
