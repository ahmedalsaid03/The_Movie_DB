import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'jquery/dist/jquery.min.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>  
      <App />
    </HashRouter>
  </StrictMode>,
)
