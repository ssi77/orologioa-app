import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import { BrowserRouter } from 'react-router-dom'
    import GlobalStyle from './styles/GlobalStyle'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </React.StrictMode>
    )
