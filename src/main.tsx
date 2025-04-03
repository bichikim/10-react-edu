import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import PropsChildren from './routes/content1/PropsChildren.tsx'
import PropsOptional from './routes/content1/PropsOptional.tsx'
import PropsType from './routes/content1/PropsType.tsx'
import Props from './routes/content1/Props.tsx'
import InsertChildren from './routes/content1/InsertChildren.tsx'
import InsertJs from './routes/content1/InsertJs.tsx'
import JSXElement from './routes/content1/JSXElement.tsx'
import CreateComponent from './routes/content1/CreateComponent.tsx'
import ConditionJSX from './routes/content1/ConditionJSX.tsx'
import LoopJSX from './routes/content1/LoopJSX.tsx'
import LiftingState from './routes/content2/LiftingState.tsx'
import ParentChildren from './routes/content2/ParentChildren.tsx'
import Deps from './routes/content3/Deps.tsx'
import Fetch from './routes/content3/Fetch.tsx'
import UseEffect from './routes/content3/UseEffect.tsx'
import Ref from './routes/content3/Ref.tsx'
import HookOutside from './routes/content3/HookOutside.tsx'
import Main from './routes/mini-project/Main.tsx'
import { ThemeContextExample } from './routes/content4/ThemeContext.tsx'
import { ErrorBoundaryExample } from './routes/content4/ErrorBoundary.tsx'
import { SuspenseExample } from './routes/content4/Suspense.tsx'
import { DebounceThrottleExample } from './routes/content4/DebounceThrottle.tsx'
import { ElementEvent } from './routes/content1/ElementEvent.tsx'
import ExcludeDeps from './routes/content3/ExcludeDeps.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="content1">
              <Route path="condition-jsx" element={<ConditionJSX />} />
              <Route path="create-component" element={<CreateComponent />} />
              <Route path="element-event" element={<ElementEvent />} />
              <Route path="insert-children" element={<InsertChildren />} />
              <Route path="insert-js" element={<InsertJs />} />
              <Route path="jsx-element" element={<JSXElement />} />
              <Route path="loop-jsx" element={<LoopJSX />} />
              <Route path="props" element={<Props />} />
              <Route path="props-children" element={<PropsChildren />} />
              <Route path="props-optional" element={<PropsOptional />} />
              <Route path="props-type" element={<PropsType />} />
            </Route>
            <Route path="content2">
              <Route path="lifting-state" element={<LiftingState />} />
              <Route path="parent-children" element={<ParentChildren />} />
            </Route>
            <Route path="content3">
              <Route path="deps" element={<Deps />} />
              <Route path="exclude-deps" element={<ExcludeDeps />} />
              <Route path="fetch" element={<Fetch />} />
              <Route path="hook-outside" element={<HookOutside />} />
              <Route path="ref" element={<Ref />} />
              <Route path="use-effect" element={<UseEffect />} />
            </Route>
            <Route path="content4">
              <Route path="theme-context" element={<ThemeContextExample />} />
              <Route path="error-boundary" element={<ErrorBoundaryExample />} />
              <Route path="suspense" element={<SuspenseExample />} />
              <Route path="debounce-throttle" element={<DebounceThrottleExample />} />
            </Route>
            <Route path="mini-project" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
