import { useContext, useEffect } from "react";
import { Route ,Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User from "../components/Management/Users";
import { UserContext } from "../components/Management/UserContext";
// import User from "../components/Management/Users";
const PrivatePages = ({Component}) => {
  const {user} = useContext(UserContext)
  console.log('>>check user' , user)

    if (user.isAuthenticated === false ) {
      // Nếu không có phiên đăng nhập, điều hướng đến trang login
      return <Navigate to="/login" />;
    }
 return <Component/>
  }
export default PrivatePages;