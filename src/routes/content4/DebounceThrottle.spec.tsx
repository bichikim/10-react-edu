/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { DebounceThrottleExample } from './DebounceThrottle'

describe('DebounceThrottle', () => {
  it('renders input field and increment button', () => {
    render(<DebounceThrottleExample />)
    expect(screen.getByPlaceholderText('입력해보세요...')).toBeInTheDocument()
    expect(screen.getByText('Increment (Throttled)')).toBeInTheDocument()
  })

  it('updates input value', async () => {
    vi.useFakeTimers()
    render(<DebounceThrottleExample />)
    const input = screen.getByPlaceholderText('입력해보세요...')
    fireEvent.change(input, { target: { value: 'test' } })
    await act(async () => {
      vi.advanceTimersByTime(500)
    })
    expect(input).toHaveValue('test')
    vi.useRealTimers()
  })

  it('increments count when button is clicked', async () => {
    vi.useFakeTimers()
    render(<DebounceThrottleExample />)
    const button = screen.getByText('Increment (Throttled)')

    // 첫 번째 클릭
    fireEvent.click(button)
    expect(screen.getByTestId('count')).toHaveTextContent('1')

    // 1초 이내에 두 번째 클릭 (throttle로 인해 무시됨)
    fireEvent.click(button)
    expect(screen.getByTestId('count')).toHaveTextContent('1')

    // 1초 후 두 번째 클릭
    await act(() => {
      vi.advanceTimersByTime(1000)
    })
    fireEvent.click(button)
    expect(screen.getByTestId('count')).toHaveTextContent('2')
    vi.clearAllTimers()
  })

  it('debounces input value', async () => {
    vi.useFakeTimers()
    render(<DebounceThrottleExample />)
    const input = screen.getByPlaceholderText('입력해보세요...')

    // 입력값 변경
    fireEvent.change(input, { target: { value: 'test' } })
    await act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(screen.queryByTestId('debounced-value')).not.toHaveTextContent('test')

    fireEvent.click(screen.getByText('Increment (Throttled)'))

    await act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByTestId('count')).toHaveTextContent('1')
    vi.clearAllTimers()
  })
})
