import { useState } from 'react'
import './App.scss'
import { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navigation/Nav'
import { Circles } from 'react-loader-spinner'

import AppPages from './Pages/AppPage'
import { UserContext } from './components/Management/UserContext' 
const App = ()=>{
  const {user} = useContext(UserContext)
    return (
        <Router>  
            {user && user.isLoading ? 
              <div className="spinner-container">
               <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
              </div>
             : 
              <>
                <div className='nav-bar'>
                  <Navbar />
                </div>
                <div className='app'>
                  <AppPages />
                  <ToastContainer />
                </div>
              </>
            }
        </Router>
      )
    
  }

export default App