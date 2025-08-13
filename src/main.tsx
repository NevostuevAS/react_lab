import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

///import './1/1_8_1/style.css'
import App from './2/2_2_2/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
