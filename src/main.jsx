import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ImportantSection } from '../src/pages/Main/components/ImportantSection/index.js'

import App from './App.jsx'

// import { ImportantSection } from ''

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ImportantSection />
  </StrictMode>,
)
