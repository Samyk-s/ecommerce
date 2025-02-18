import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite/dist/flowbite.min.css';
import Routing from './conifg/routing';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Routing/>
  </StrictMode>,
)
