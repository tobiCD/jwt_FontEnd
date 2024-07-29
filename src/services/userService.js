import axios from "../setup/axios"

const RegisterNewUser = async(data)=>{
    return await axios.post('/api/v1/register',data )
}


const LoginUser = async(LoginValue,password)=>{
    return await axios.post('/api/v1/login',
    {
        LoginValue , password
    }
    )
}

const allUser = async(page,limit )=>{
    return await axios.get(`/api/v1/user/read`,page,limit)
}
const fetAllUser = async(page ,limit)=>{
    return await axios.get(`/api/v1/user/read?page=${page}&&limit=${limit}`)
}
const deleteUser = async (userId)=>{
    return await axios.delete(`/api/v1/user/delete/${userId}`)
}

const FetGroup = async()=>{
    return await axios.get(`/api/v1/group/read`)
}
const CreatUser=async(data)=>{
    return await axios.post('/api/v1/user/create', data);


}
const EditUser = async(data)=>{
    return await axios.put('/api/v1/user/edit', data)
}
const getUserAccount = async()=>{
    return await axios.get('/api/v1/account')
}

const LogoutUser = async()=>{
    return await axios.post('/api/v1/logout')
}



export {RegisterNewUser ,LoginUser ,fetAllUser,deleteUser,
    FetGroup,EditUser,CreatUser,allUser,getUserAccount,LogoutUser }