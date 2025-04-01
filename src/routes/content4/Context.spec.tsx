/**
 * @vitest-environment jsdom
 */

import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { Context } from './Context'

describe('Context 컴포넌트', () => {
  afterEach(() => {
    cleanup()
  })

  it('Context 컴포넌트가 올바르게 렌더링되어야 합니다', () => {
    render(<Context />)
    // 초기 상태에서는 빈 문자열이 렌더링됨
    const aComponent = screen.getByTestId('a-component')
    const bComponent = screen.getByTestId('b-component')
    expect(aComponent).toHaveTextContent('foo')
    expect(bComponent).toHaveTextContent('foo')
  })

  it('버튼 클릭 시 컨텍스트 값이 업데이트되어야 합니다', () => {
    render(<Context />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    // 버튼 클릭 후 'a'가 렌더링됨
    const divElements = screen.getAllByText('fooa')
    expect(divElements).toHaveLength(2)

    // 한 번 더 클릭
    fireEvent.click(button)
    const updatedDivs = screen.getAllByText('fooaa')
    expect(updatedDivs).toHaveLength(2)
  })
})
