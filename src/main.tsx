import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Local, self-hosted typography — no runtime CDN dependency.
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/manrope/latin-700.css'
import '@fontsource/manrope/latin-800.css'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-sans/latin-700.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-400.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-500.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-600.css'
import '@fontsource/ibm-plex-sans-arabic/arabic-700.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/ui.css'
import './styles/home.css'
import './styles/pages.css'

import { App } from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Root element #root was not found')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
