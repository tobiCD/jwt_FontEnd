// RegisterForm.js
import { useForm , } from "react-hook-form";
import { HiOutlineArrowCircleRight , HiOutlineArrowCircleLeft} from "react-icons/hi";
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect ,React, useState } from "react";
import {RegisterNewUser} from '../../services/userService'
import axios from "axios";
const fields = [

  {
    label: "Username",
    type: "text",
    placeholder: "Doe",
    required: true,
    gridCols: 2,
  },
  {
    label: "Email",
    type: "email",
    placeholder: "john.doe@example.com",
    required: true,
    gridCols: 2,
  },
  {
    label: "Phone",
    type: "tel",
    placeholder: "+1 123-456-7890",
    required: true,
    gridCols: 2,
  },
  {
    label: "Address",
    type: "text",
    placeholder: "123 Main St, City, Country",
    required: true,
    gridCols: 2,
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    gridCols: 1,
  },
  {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
    gridCols: 1,
  },
];

 const RegisterForm= () =>{
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");


 
  const onSubmit = async (Userdata) => {
    let userData = {
      email : Userdata.email,
      phone : Userdata.phone,
      password : Userdata.password  ,
      username : Userdata.username  }
      // console.log(userData)

   try {
    
    const response = await RegisterNewUser(Userdata)
    const serverData =response.data// call Server để nhận respone code and validform register
    if (response.status >=200 && response.status <300){
      toast.success('Registration successfully!')
    }
  
   }
    catch (error) {
     if ( error.response){
      console.error('error' , error.response.data)
      switch (error.response.status) {
        case 400:
          toast.error(error.response.data.EM)
          break;
      
        default:
          break;
      }
     }             
   }
 
  
    
  }
    
    return (
      <div>
        <div className="container mx-auto">
          <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-2xl my-20 rounded-md mx-auto">
            <div className="pb-5">
              <h1 className="text-3xl font-bold">Register Form</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-start items-center w-full m-auto"
            >
              <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                {fields.map((field, index) => (
                  <div
                    key={index}
                    className={`text-left flex flex-col gap-2 w-full ${
                      field.gridCols === 2 ? "md:col-span-2" : ""
                    }`}
                  >
                    <label className="font-semibold">{field.label}</label>
                    <input
                      {...register(field.label.toLowerCase().replace(" ", "_"), {
                        required: field.required,
                        validate: // Check độ dài và match password 
                        field.label === "Password"
                          ? {
                              length: (value) => value.length >= 8 || "Your Password must have more than 8 characters",
                            }
                          : field.label === "Confirm Password"
                          ? (value) => value === password || " Passwords do not match"
                          : undefined,
                      })}
                      className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 ${
                        field.gridCols === 2 ? "md:w-full" : ""
                      }`}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    {errors[field.label.toLowerCase().replace(" ", "_")] && (
                      <span className="text-red-500">
                        {errors[field.label.toLowerCase().replace(" ", "_")].message ||
                          "This field is required"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="w-full text-left">
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                  title="Confirm Order"
                >
                  <span>Register</span>
                  <HiOutlineArrowCircleRight size={20} />
                </button>
              </div>
              <div className="container m-auto py-6 px-6">
                <Link
                  to="/login"
                  className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-500 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                >
                  <HiOutlineArrowCircleLeft size={20} /> Already have an account? Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
export default RegisterForm