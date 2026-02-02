import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './layouts/Header.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </>
)
