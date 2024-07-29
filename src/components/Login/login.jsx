import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { toast } from "react-toastify";
import {LoginUser} from '../../services/userService'
import { UserContext } from "../Management/UserContext";

const Login = ()=>{

const {loginContext} = React.useContext(UserContext)
let navigate = useNavigate();
const [isLogin , setIsLogin ]= useState("")
const [password , setPassword] = useState("")


const submitForm = async(e) =>{
  e.preventDefault()
   if(!isLogin || !password){
  toast.error('Please enter your email and password')
 }
 try {
  const response = await LoginUser(isLogin,password)
  console.log(response)
  if(response.EC === 200 )
  {
    toast.success(response.EM)
    const email =response.DT.email
    const  username = response.DT.username
    const roles  = response.DT.roles
    const access_token = response.DT.access_token
    const data = {
      // xử lí đưa dữ liệu response vào context
      isAuthenticated : true,
      token : access_token,
      account : {roles , email ,username}
    }
    // sessionStorage.setItem('account',JSON.stringify(data));
    loginContext(data);
    navigate("/users");
  }
  
} catch (error) {
  console.log(error)
  if ( error.response){
    console.error('error' , error.response.data.EC)
    switch (error.response.data.EC) {
      case 400:
        toast.error(error.response.data.EM)
        break;
      case 500:
        toast.error(error.response.data.EM)

        break;
    
      default:
        break;
    }
   }             
}
  }
  const handleKeyPress = (event)=>{
    if(event.code === 'Enter'){
      submitForm(event);
    }
   
  }

const handleCreateNewAccount =()=>{
  navigate('/register')
}



    return(
            <>
           <form method="POST" onSubmit={submitForm}>
         <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <AiOutlineTwitter
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={isLogin}
          onChange={(event) => {setIsLogin(event.target.value)}}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event)=>{setPassword(event.target.value)}}
          onKeyPress={(event)=>handleKeyPress(event)}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
          onClick={handleCreateNewAccount}
          >
            Register
          </a>
        </div>
      </div>
    </section>
    </form>
  </>
    )
}

export default Login