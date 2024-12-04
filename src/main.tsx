import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "src/components/ui/provider"


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>

  </StrictMode>
)