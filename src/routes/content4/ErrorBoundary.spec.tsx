/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorBoundaryExample } from './ErrorBoundary'

describe('ErrorBoundary', () => {
  it('renders error button', () => {
    render(<ErrorBoundaryExample />)
    expect(screen.getByText('에러 발생시키기')).toBeInTheDocument()
  })

  it('shows error message when error occurs', () => {
    render(<ErrorBoundaryExample />)
    const errorButton = screen.getByText('에러 발생시키기')
    fireEvent.click(errorButton)
    expect(screen.getByText('의도적으로 발생시킨 에러입니다.')).toBeInTheDocument()
  })

  it('shows retry button when error occurs', () => {
    render(<ErrorBoundaryExample />)
    const errorButton = screen.getByText('에러 발생시키기')
    fireEvent.click(errorButton)
    expect(screen.getByText('다시 시도')).toBeInTheDocument()
  })

  it('recovers from error when retry button is clicked', () => {
    render(<ErrorBoundaryExample />)
    // 에러 발생
    const errorButton = screen.getByText('에러 발생시키기')
    fireEvent.click(errorButton)
    // 다시 시도
    const retryButton = screen.getByText('다시 시도')
    fireEvent.click(retryButton)
    // 에러 버튼이 다시 보이는지 확인
    expect(screen.getByText('에러 발생시키기')).toBeInTheDocument()
  })
})
