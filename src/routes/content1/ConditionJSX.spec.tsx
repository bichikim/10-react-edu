/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hello } from './ConditionJSX'

describe('ConditionJSX 컴포넌트', () => {
  it('isButton이 true일 때 button이 보여야 합니다', () => {
    render(<Hello isButton={true} />)
    // 렌더링 결과를 콘솔에 출력 하고 싶을때
    // screen.debug()
    expect(screen.getByText('hello')).toBeInstanceOf(HTMLButtonElement)
  })

  it('isButton이 false일 때 div가 보여야 합니다', () => {
    render(<Hello isButton={false} />)
    expect(screen.getByText('hello')).toBeInstanceOf(HTMLDivElement)
  })
})
