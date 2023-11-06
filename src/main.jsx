import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppPorvider } from './Context/Contextapi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppPorvider>
    <App />
  </AppPorvider>,
)
