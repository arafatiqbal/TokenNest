import { cleanup, render } from '@testing-library/svelte';
import { describe, expect, it, afterEach } from 'vitest';
import Signup from '../components/signup.svelte';

describe('Signup.svelte', () => {
	afterEach(() => cleanup());

	it('mounts', () => {
		const { container } = render(Signup);
		expect(container).toBeTruthy();
		expect(container.innerHTML).toContain('Terms and Conditions');
		expect(container.innerHTML).toContain('Create and account');
	});
});
