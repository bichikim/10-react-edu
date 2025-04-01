/**
 * @vitest-environment jsdom
 */

import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useOldValue } from './use-old-value'

describe('useOldValue', () => {
  it('초기에는 현재 값을 반환해야 합니다', () => {
    const { result } = renderHook(() => useOldValue(10))
    expect(result.current).toBe(10)
  })

  it('값이 변경되면 이전 값을 반환해야 합니다', () => {
    const { result, rerender } = renderHook(({ value }) => useOldValue(value), {
      initialProps: { value: 10 },
    })

    expect(result.current).toBe(10)

    rerender({ value: 20 })
    expect(result.current).toBe(10)

    rerender({ value: 30 })
    expect(result.current).toBe(20)
  })
})
