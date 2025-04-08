import { createContext, useContext, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  handleToggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function ThemeToggle() {
  const { theme, handleToggleTheme } = useTheme()

  const className = `${theme === 'light' ? 'text-black' : 'text-white'} ${theme === 'light' ? 'bg-white' : 'bg-black'}`

  return (
    <div>
      <span className={className}>{theme}</span>
      <button onClick={handleToggleTheme}>테마 변경</button>
    </div>
  )
}

export default function ThemeContextExample() {
  return (
    <div>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  )
}
