import { cleanup, render } from '@testing-library/svelte'
import {describe, expect, it, afterEach} from 'vitest';
import Header from '../components/header.svelte';

describe('Header.svelte', () => {
  afterEach(() => cleanup())

  it('mounts', () => {
    const { container } = render(Header)
    expect(container).toBeTruthy()
    expect(container.innerHTML).toContain('TokenNest')
  })
})