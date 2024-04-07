import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import App1 from './App1.jsx'   //De momento, no quiero ver un archivo en rojo xD
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        {/* <App1/> */}
    </BrowserRouter>
  </React.StrictMode>,
)
