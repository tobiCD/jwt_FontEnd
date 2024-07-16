import { useEffect } from "react";
import { Route ,Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User from "../components/Management/Users";
// import User from "../components/Management/Users";
const PrivatePages = ({Component}) => {
    const session = sessionStorage.getItem("account");
  
    if (!session) {
      // Nếu không có phiên đăng nhập, điều hướng đến trang login
      return <Navigate to="/login" />;
    }
 return <Component/>
  }
export default PrivatePages;