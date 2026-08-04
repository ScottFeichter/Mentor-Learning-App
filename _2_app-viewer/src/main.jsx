import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './palette-grey.css'
import './palette-royal.css'
import './palette-ocean.css'
import './palette-ocean-gradient.css'
import './palette-forest.css'
import './palette-midnight.css'
import './semantic.css'
import './index.css'
import { CompletionProvider } from './CompletionContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CompletionProvider>
        <App />
      </CompletionProvider>
    </BrowserRouter>
  </StrictMode>,
)
