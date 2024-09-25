import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/App'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Uncomment if you want to see the Lighthouse report in the console
// import reportWebVitals from './reportWebVitals'
// reportWebVitals(console.log)
