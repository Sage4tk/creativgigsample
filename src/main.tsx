import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/** FONTS **/
import "@fontsource/inter"; // Defaults to weight 400
// import "@fontsource/inter/400.css"; // Specify weight
// import "@fontsource/inter/400-italic.css"; // Specify weight and style

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
