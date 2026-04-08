import React from 'react'
import { createRoot } from 'react-dom/client'
import About from './pages/About'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
)
