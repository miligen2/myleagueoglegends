import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './compenent/header/Header.tsx'
import Stats from './view/Stats.tsx'
import "./index.css"  



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Stats />
  </React.StrictMode>,
)
