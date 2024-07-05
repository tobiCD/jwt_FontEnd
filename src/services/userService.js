import axios from "axios"

const RegisterNewUser = async(data)=>{
    return await axios.post('http://localhost:8080/api/v1/register',data )
}





export {RegisterNewUser}