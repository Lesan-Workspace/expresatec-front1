import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Toaster closeButton richColors position="top-center" />
      <App />
    </NextUIProvider>


  </React.StrictMode>,
)
