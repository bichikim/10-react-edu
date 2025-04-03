import { Outlet, Link } from 'react-router'

function App() {
  return (
    <div className="flex absolute inset-0">
      <aside className="h-full w-max p-2 bg-gray-100 overflow-y-auto overflow-x-hidden">
        <nav className="flex flex-col gap-2 h-full w-max">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/content1/condition-jsx">Contents/ConditionJSX</Link>
          <Link to="/content1/create-component">Contents/CreateComponent</Link>
          <Link to="/content1/insert-children">Contents/InsertChildren</Link>
          <Link to="/content1/element-event">Contents/ElementEvent</Link>
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
          <Link to="/content4/theme-context">Contents/ThemeContext</Link>
          <Link to="/content4/error-boundary">Contents/ErrorBoundary</Link>
          <Link to="/content4/suspense">Contents/Suspense</Link>
          <Link to="/content4/debounce-throttle">Contents/DebounceThrottle</Link>
          <Link to="/mini-project">Mini Project</Link>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

export default App
