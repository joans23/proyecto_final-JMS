import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)