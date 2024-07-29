import axios from 'axios'
import { toast } from 'react-toastify';
/// custom axios cho việc dễ dàng thao tác request , response 
const instance = axios.create({
    baseURL: 'http://localhost:8080',
  });

instance.defaults.withCredentials = true;
  
  // Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN123';

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    const status = error && error.response && error.response.status || 500 ;
    console.log(status)
    switch (status) {
        
      case 400 : 
        toast.error('Unauthorized the user. please  login... ')
        return error.response.data;
        
      case 401 : 
        toast.error('Unauthorized the user. please  login... ')
        
        return error.response.data;

        case 403 : 
        toast.error('Unauthorized the user. please  login... ')
        
        return error.response.data;

      default:
      return Promise.reject(error);

        break;
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default instance;