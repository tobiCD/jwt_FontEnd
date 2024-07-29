import { Route, Routes, Outlet } from 'react-router-dom';
import Login from '../components/Login/login'
import Register from '../components/register/register'
import User from '../components/Management/Users'
import "react-toastify/dist/ReactToastify.css";
import PrivatePages from '../Pages/PrivatePages'
import { useRef } from 'react';
import Navbar from '../components/Navigation/Nav';
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';
const AppPages =(props)=>{
    return (
        <>
   <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private route example */}
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<PrivatePages Component ={User}/>} />
    </Routes>
        </>
    )
}
export default AppPages