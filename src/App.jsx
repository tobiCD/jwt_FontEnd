import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import MainLayout from './Pages/MainLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import AppPages from './Pages/AppPage'

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/*" element={<AppPages />} />
        </Route>
      </Routes>
    </Router>
  )
 
}


export default App