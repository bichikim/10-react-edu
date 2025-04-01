import { createContext, useContext, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeContextExample() {
  return (
    <div>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <span>{theme}</span>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  )
}
