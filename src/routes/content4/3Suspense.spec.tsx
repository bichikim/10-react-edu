/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { SuspenseExample } from './3Suspense'

describe('Suspense', () => {
  it('shows content after loading', async () => {
    vi.useFakeTimers()
    render(<SuspenseExample />)
    screen.debug()
    expect(screen.getByTestId('loading-text')).toBeInTheDocument()
    await act(async () => {
      vi.runAllTimers()
    })
    expect(screen.getByText('데이터 로딩 완료!')).toBeInTheDocument()
    vi.clearAllTimers()
  })
})
