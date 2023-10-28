<script lang="ts">
  import GithubButton from '../../components/githubButton.svelte';
  import GoogleButton from '../../components/googleButton.svelte';
</script>

<section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div class="grid grid-cols-1 justify-items-center">
          <h1
            class="text-xl text-center my-4 font-bold leading-tight tracking-tight text-gray-900 md:text-xl"
          >
            Please Sign In to See the Dashboard
          </h1>
          <GithubButton />

          <GoogleButton />
        </div>
        <div>
          <p class="text-sm font-light text-gray-500 mb-2">
            Everyone should have atleast one of these accounts...
          </p>
          <p class="text-xs font-light text-gray-500">
            <a
              target="_blank"
              href="https://accounts.google.com/signup"
              class="font-medium text-primary-700 hover:underline">Sign up for Google</a
            >
          </p>
          <p class="text-xs font-light text-gray-500">
            <a
              target="_blank"
              href="https://discord.com/register"
              class="font-medium text-primary-700 hover:underline">Sign up for Discord</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
