import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import GoogleProvider from '@auth/core/providers/google';
import {
  AUTH_SECRET,
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} from '$env/static/private';
import type { Provider } from '@auth/core/providers';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const githubProvider = GitHub({
  clientId: GITHUB_ID,
  clientSecret: GITHUB_SECRET
}) as Provider;
const googleProvider = GoogleProvider({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET
}) as Provider;

export const handle: Handle = sequence(
  SvelteKitAuth({
    providers: [githubProvider, googleProvider],
    secret: AUTH_SECRET
  })
);
