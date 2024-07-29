import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Audio } from 'react-loader-spinner'

import { UserProvider } from './components/Management/UserContext' 

ReactDOM.createRoot(document.getElementById('root')).render(
        <UserProvider>
                <App />
          
        </UserProvider>
)
