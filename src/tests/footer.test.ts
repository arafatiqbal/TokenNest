import { cleanup, render } from '@testing-library/svelte'
import {describe, expect, it, afterEach} from 'vitest';
import Footer from '../components/footer.svelte'

describe('Footer.svelte', () => {
  afterEach(() => cleanup())

  it('mounts', () => {
    const { container } = render(Footer)
    expect(container).toBeTruthy()
    expect(container.innerHTML).toContain('TokenNest™')
  })
})