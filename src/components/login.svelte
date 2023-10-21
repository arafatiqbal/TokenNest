<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
{#if !$page.data.session}
	<section class="bg-gray-50">
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
						Login to See Dashboard
					</h1>
					<button
						on:click={() => signIn('github', { callbackUrl: '/dashboard' })}
						type="submit"
						class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>Sign in</button
					>
					<p class="text-sm font-light text-gray-500">
						Don’t have a discord account yet? <a
							href="https://discord.com/register"
							class="font-medium text-primary-600 hover:underline">Sign up</a
						>
					</p>
				</div>
			</div>
		</div>
	</section>
{/if}
