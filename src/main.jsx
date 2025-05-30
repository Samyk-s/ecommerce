import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite/dist/flowbite.min.css';
import { Analytics } from '@vercel/analytics/react';  

import Routing from './conifg/routing';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Analytics />

  <Routing/>
  </StrictMode>,
)
