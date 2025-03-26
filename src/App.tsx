import { Outlet, Link } from 'react-router'

import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/content1">Content1</Link>
          <Link to="/content2">Content2</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App
