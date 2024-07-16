import { Route, Routes, Outlet } from 'react-router-dom';
import Login from '../components/Login/login'
import Register from '../components/register/register'
import User from '../components/Management/Users'
import "react-toastify/dist/ReactToastify.css";
import PrivatePages from '../Pages/PrivatePages'
import { useRef } from 'react';

const AppPages =(props)=>{
    return (
        <>
   <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private route example */}

        <Route path="/users" element={<PrivatePages Component ={User}/>} />
    </Routes>
        </>
    )
}
export default AppPages