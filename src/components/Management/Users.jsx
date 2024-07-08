import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
const User = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
            let session = sessionStorage.getItem('account');
            if(!session){
                    navigate('/login')
            }

    },[])

    return (

       <> 
       <h1>Helelo world</h1></>
    )
}


export default User