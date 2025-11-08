import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (localStorage.getItem('searchCodes') == null) {
  localStorage.setItem('searchCodes', JSON.stringify(['home', 'homes', 'creation']));
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
