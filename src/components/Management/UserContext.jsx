import React,{ useEffect, useState } from "react";
import { getUserAccount } from "../../services/userService";

const UserContext = React.createContext(null)
// tạo dữ liệu đưa vào login check 
const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const userDefaut = {
          isLoading : true,
          isAuthenticated: false,
          token: "",
          account : {}
        };
    
    const [user, setUser] = useState(userDefaut);
  
    // Login updates the user data with a name parameter
    const loginContext = (account) => {
      setUser({...account,
        isLoading:false}) 
    };
    // Logout updates the user data to default
    const LogoutContext = () => {
      setUser({...userDefaut,
        isLoading:false, }) 
    };

    /// xử lí dữ kiện thêm dữ liệu account vào cookies để không phải reload 
    const fetUserAccount = async()=>{
      try {
        let response = await getUserAccount()
        if(response && response.EC === 200 )
          {
            // toast.success(response.EM)
            const email =response.DT.email
            const  username = response.DT.username
            const roles  = response.DT.roles
            const access_token = response.DT.access_token
            const data = {
              // xử lí đưa dữ liệu response vào context
              isAuthenticated : true,
              token : access_token,
              account : {roles , email ,username},
              isLoading : false
            } 
              setUser(data)
          }
          else{
            setUser({...userDefaut , isLoading: false})
          }
          
        } catch (error) {
          console.log(error)
          // const data = {
          //   // xử lí đưa dữ liệu response vào context
          //   isAuthenticated : false,
          // } 
          //   setUser(data)
          // }
        }
      }
      
    
    
   
    useEffect(()=>{
      if(window.location.pathname !== '/' && window.location.pathname !== '/login' ){
        fetUserAccount();
      }
      else{  // handle lại login mà không call api 

        setUser({...user,isLoading : false})
      }
    },[])
  
    return (
      <UserContext.Provider value={{ user, loginContext ,LogoutContext}}>
        {children}
      </UserContext.Provider>
    );
}

export  {UserProvider,UserContext};