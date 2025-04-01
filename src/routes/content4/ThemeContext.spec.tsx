/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeContextExample } from './ThemeContext'

describe('ThemeContext', () => {
  it('renders theme toggle button', () => {
    render(<ThemeContextExample />)
    expect(screen.getByText('테마 변경')).toBeInTheDocument()
  })

  it('changes theme when toggle button is clicked', () => {
    render(<ThemeContextExample />)
    expect(screen.getByText('light')).toBeInTheDocument()
    const toggleButton = screen.getByText('테마 변경')
    fireEvent.click(toggleButton)
    expect(screen.getByText('dark')).toBeInTheDocument()
  })

  it('shows correct initial theme', () => {
    render(<ThemeContextExample />)
    expect(screen.getByText('light')).toBeInTheDocument()
  })
})
