import { Outlet, Link } from 'react-router'


function App() {
  return (
    <div className="flex absolute inset-0">
      <aside className="h-full flex-0 p-2 bg-gray-100">
        <nav className="flex flex-col gap-2 h-full">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/content1/condition-jsx">Contents/ConditionJSX</Link>
          <Link to="/content1/create-component">Contents/CreateComponent</Link>
          <Link to="/content1/insert-children">Contents/InsertChildren</Link>
          <Link to="/content1/insert-js">Contents/InsertJs</Link>
          <Link to="/content1/jsx-element">Contents/JSXElement</Link>
          <Link to="/content1/loop-jsx">Contents/LoopJSX</Link>
          <Link to="/content1/props">Contents/Props</Link>
          <Link to="/content1/props-children">Contents/PropsChildren</Link>
          <Link to="/content1/props-optional">Contents/PropsOptional</Link>
          <Link to="/content1/props-type">Contents/PropsType</Link>
          <Link to="/content2/lifting-state">Contents/LiftingState</Link>
          <Link to="/content2/parent-children">Contents/ParentChildren</Link>
          <Link to="/content3/deps">Contents/Deps</Link>
          <Link to="/content3/fetch">Contents/Fetch</Link>
          <Link to="/content3/hook-outside">Contents/HookOutside</Link>
          <Link to="/content3/ref">Contents/Ref</Link>
          <Link to="/content3/use-effect">Contents/UseEffect</Link>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

export default App
