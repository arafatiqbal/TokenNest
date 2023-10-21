import { cleanup, render } from '@testing-library/svelte';
import { describe, expect, it, afterEach } from 'vitest';
import Login from '../components/login.svelte';

describe('Signup.svelte', () => {
	afterEach(() => cleanup());

	it('mounts', () => {
		const { container } = render(Login);
		expect(container).toBeTruthy();
		expect(container.innerHTML).toContain('Sign in to your account');
		expect(container.innerHTML).toContain('Don’t have an account yet?');
	});
});
