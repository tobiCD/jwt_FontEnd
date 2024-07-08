import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import MainLayout from './Pages/MainLayout'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import Login from './components/Login/login'
import Register from './components/register/register'
import User from './components/Management/Users'
import "react-toastify/dist/ReactToastify.css";

const App = ()=>{
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<MainLayout/>}>
      
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/users' element={<User/>}/>
    
    </Route>
  ))
 
  return (
    <>
      <RouterProvider router={router}/>
     
 
    </>
  )
}


export default App