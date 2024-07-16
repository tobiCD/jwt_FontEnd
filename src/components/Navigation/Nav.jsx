import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.scss"
import { useLocation } from 'react-router-dom'
const  Navbar = ()=> {
  const location = useLocation()
  const[isShow , SetIsShow] = useState(true)
  useEffect(()=>{
  const session = sessionStorage.getItem("account");
  if(session){
    SetIsShow(true)
  }
},[]);

  const linkClass = ({isActive}) => isActive ?'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  :'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return(<>
  {isShow === true &&
    <nav class="bg-indigo-700 border-b border-indigo-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <a class="flex flex-shrink-0 items-center mr-4" href="/">
              <img
                class="h-10 w-auto"
                // src={images}
                alt="React Jobs"
              />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </a>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
              <NavLink to='/' className={linkClass}>
                    Home
              </NavLink>
              <NavLink to='/users' className={linkClass}>
                    DashBoard 
              </NavLink>
              <NavLink to='/login' className={linkClass}>
              Login
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  }
    </>
  )
}

export default Navbar;