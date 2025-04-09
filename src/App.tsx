import { Outlet, Link } from 'react-router'

function App() {
  return (
    <div className="flex absolute inset-0">
      <aside className="h-full w-max p-2 bg-gray-100 overflow-y-auto overflow-x-hidden">
        <nav className="flex flex-col gap-2 h-full w-max">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/content1/condition-jsx">Content1/ConditionJSX</Link>
          <Link to="/content1/create-component">Content1/CreateComponent</Link>
          <Link to="/content1/insert-children">Content1/InsertChildren</Link>
          <Link to="/content1/element-event">Content1/ElementEvent</Link>
          <Link to="/content1/insert-js">Content1/InsertJs</Link>
          <Link to="/content1/jsx-element">Content1/JSXElement</Link>
          <Link to="/content1/loop-jsx">Content1/LoopJSX</Link>
          <Link to="/content1/props">Content1/Props</Link>
          <Link to="/content1/props-children">Content1/PropsChildren</Link>
          <Link to="/content1/props-optional">Content1/PropsOptional</Link>
          <Link to="/content1/props-type">Content1/PropsType</Link>
          <Link to="/content2/rendering">Content2/1 Rendering</Link>
          <Link to="/content2/flush-sync">Content2/2A FlushSync</Link>
          <Link to="/content2/update-state">Content2/2 UpdateState</Link>
          <Link to="/content2/use-reducer1">Content2/3A UseReducer1</Link>
          <Link to="/content2/use-reducer2">Content2/3B UseReducer2</Link>
          <Link to="/content2/parent-children">Content2/4 ParentChildren</Link>
          <Link to="/content2/lifting-state">Content2/5 LiftingState</Link>
          <Link to="/content3/hook-outside">Content3/1 HookOutside</Link>
          <Link to="/content3/ref">Content3/2 Ref</Link>
          <Link to="/content3/use-effect">Content3/3 UseEffect</Link>
          <Link to="/content3/deps">Content3/3A Deps</Link>
          <Link to="/content3/fetch">Content3/4 Fetch</Link>
          <Link to="/content3/exclude-deps">Content3/5 ExcludeDeps</Link>
          <Link to="/content3/updated-ref">Content3/6 UpdatedRef</Link>
          <Link to="/content3/strict-effect">Content3/7 StrictEffect</Link>
          <Link to="/content4/context">Content4/1 Context</Link>
          <Link to="/content4/theme-context">Content4/2 ThemeContext</Link>
          <Link to="/content4/suspense">Content4/3 Suspense</Link>
          <Link to="/content4/error-boundary">Content4/4 ErrorBoundary</Link>
          <Link to="/content4/debounce-throttle">Content4/DebounceThrottle</Link>
          <Link to="/mini-project">Mini Project</Link>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

export default App
