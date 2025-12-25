import { StrictMode, useContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AppContext } from './context/context';

createRoot(document.getElementById('root')).render(
  <AppContext.Provider value={{}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext.Provider>
)
