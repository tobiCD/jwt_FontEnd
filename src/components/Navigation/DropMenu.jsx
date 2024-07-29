// import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';
// import "./nav.scss"
// // import { UserContext } from "../Management/UserContext";
// // import { useContext } from "react";
// import { LogoutUser } from '../../services/userService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


// // const {user,LogoutContext} = useContext(UserContext)
// const DropMenu =() =>{
//     const navigate = useNavigate()
//     const {user} = useContext(UserContext)
//     const HandleLogout = async()=>{
//         let data = await LogoutUser();
//         if(data && data.EC === 200){
//                 toast.success('Logout success') 
//                 LogoutContext()
//                 console.log(data)
//                 navigate('/login')
//         }
//         else{
//             toast.error(error.data.EM)
//         }
//     }
//   return (
   
//     <>
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic" >
//       Welcome {user.username}!
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="" >
//         <span onClick={()=>HandleLogout()}>Log out</span>
//         </Dropdown.Item>
//         <Dropdown.Item href="">Change Password</Dropdown.Item>
//         <Dropdown.Item href="">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//    </>

//   )
// }

// export default DropMenu