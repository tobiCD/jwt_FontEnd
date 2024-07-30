import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "./nav.scss";
import Logo from '../../assets/website.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from "../Management/UserContext";
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify'; // Nếu bạn sử dụng react-toastify
import { LogoutUser } from '../../services/userService';
const Navbar = () => {
  const { user, LogoutContext } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(user)
  const HandleLogout = async () => {
    try {
      let data = await LogoutUser(); // clear cookies
      LogoutContext(); // Xóa trạng thái người dùng trong context
      console.log(user)
      if (data && data.EC === 200) {
        toast.success('Logout success');
        navigate('/login');
      } else {
        toast.error(data.EM || 'Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error); // Ghi log lỗi
      toast.error('An error occurred during logout');
    }
  };

  const linkClassName = ({ isActive }) => 
    isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' 
    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  if (user.isAuthenticated === true || location.pathname === '/') {
    return (
      <nav className="bg-darkslategray-900 border-darkslategray-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <a className="flex flex-shrink-0 items-center mr-4" href="/">
                <img className="h-10 w-auto" src={Logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">User Management</span>
              </a>
            </div>

            {/* Menu Section */}
            <div className="flex items-center space-x-4 font-bold">
              {user.isAuthenticated || user.account.token === ''?  (
                <>
                  <NavLink to='/' className={linkClassName}>
                    Home
                  </NavLink>
                  <NavLink to='/users' className={linkClassName}>
                    DashBoard
                  </NavLink>
                  <NavLink to='/roles' className={linkClassName}>
                    Roles
                  </NavLink>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Welcome {user.account.username}!
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as="button" onClick={HandleLogout}>
                        Log out
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Change Password</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <NavLink to='/login' className={linkClassName}>
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
}

export default Navbar;
