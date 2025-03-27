import { Outlet, Link } from 'react-router'

import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contents/props-children">Contents/PropsChildren</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App
