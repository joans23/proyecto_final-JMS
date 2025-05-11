import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MiCarrito } from './MiCarrito'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MiCarrito/>
    </BrowserRouter>
  </StrictMode>,
)
