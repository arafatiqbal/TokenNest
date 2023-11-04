<script lang="ts">
  import GithubButton from '../../components/githubButton.svelte';
  import GoogleButton from '../../components/googleButton.svelte';
</script>

<section class="px-8 py-2">
  <div class="navbar bg-base-100">
    <div class="navbar-center">
      <a href="/" class="btn btn-ghost normal-case text-xl">TokenNest</a>
    </div>
  </div>
</section>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left px-12">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Please use github or google to login and see your crypto dashboard.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <GithubButton />
        </div>
        <div class="form-control">
          <GoogleButton />
        </div>

        <div>
          <p class="text-sm font-light text-gray-500 mb-2">
            Everyone should have atleast one of these accounts...
          </p>
          <p class="text-xs font-light">
            <a
              target="_blank"
              href="https://accounts.google.com/signup"
              class="font-medium hover:underline">Sign up for Google</a
            >
          </p>
          <p class="text-xs font-light">
            <a
              target="_blank"
              href="https://discord.com/register"
              class="font-medium hover:underline"
            >
              Sign up for Discord
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
