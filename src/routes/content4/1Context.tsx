import { createContext, useContext, useState } from 'react'

export type MyContextType = string

const MyContext = createContext<MyContextType>('')

export interface MyProviderProps {
  children: React.ReactNode
}

const AComponent = () => {
  const value = useContext(MyContext)
  return <div data-testid="a-component">{value}</div>
}

const BComponent = () => {
  const value = useContext(MyContext)
  return <div data-testid="b-component">{value}</div>
}

export function MyProvider({ children }: MyProviderProps) {
  const [value, setValue] = useState<MyContextType>('foo')

  const handleIncrement = () => {
    setValue((prev) => prev + 'a')
  }

  return (
    <MyContext.Provider value={value}>
      <button onClick={handleIncrement}>add a</button>
      {children}
    </MyContext.Provider>
  )
}

export default function Context() {
  return (
    <MyProvider>
      <AComponent />
      <BComponent />
    </MyProvider>
  )
}
