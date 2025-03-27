import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content1/create-component" element={<CreateComponent />} />
          <Route path="/content1/insert-children" element={<InsertChildren />} />
          <Route path="/content1/insert-js" element={<InsertJs />} />
          <Route path="/content1/jsx-element" element={<JSXElement />} />
          <Route path="/content1/props" element={<Props />} />
          <Route path="/content1/props-children" element={<PropsChildren />} />
          <Route path="/content1/props-optional" element={<PropsOptional />} />
          <Route path="/content1/props-type" element={<PropsType />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
