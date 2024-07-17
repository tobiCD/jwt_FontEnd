import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FetGroup ,CreatUser } from '../../services/userService';
import axios from 'axios';
import './Users.scss';
import { GrOptimize } from 'react-icons/gr';

const CreateUserModal = ({ show, handleClose, fetchUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userGroups, setUserGroups] = useState([]);


  useEffect(() => {
    getGroups();
  }, []);
  
  const getGroups = async () => {
    try {
      let res = await FetGroup();
      // console.log('Response:', res);

      if (res && res.data && res.data.EC === 0) {
        setUserGroups(res.data.DT);
      }  
   } catch (error) {
      console.log(error)
      }
    }

 

  // const getGroups = async () => {
  //   try {
  //     let res = await FetGroup();
  //     // console.log('Response:', res);

  //     if (res && res.data && res.data.EC === 0) {
  //       setUserGroups(res.data.DT);
  //     }  
  //  } catch (error) {
  //     console.log(error)
  //     }
  //   }


const onSubmit = async (data) => {
    try {
      console.log(data)
      const response = await CreatUser(data)
      if (response.data && response.data.EC === 0) {
        toast.success('User created successfully!');
        fetchUser();
        handleClose();
      } else {
        toast.error(response.data.EM);
      }
    } catch (error) {
      console.log(error)
      if(error.response){
        switch(error.response.status){
          case 400 : 
          toast.error(error.response.data.EM)
          break;
          case 500 : 
          toast.error(error.response.data.EM)
          break;
          default:
          break;
        }
      }
    }
  }
  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <span className='text-red-600'>{errors.username.message}</span>}
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              {...register('phoneNumber', { required: 'Phone number is required' })}
            />
            {errors.phoneNumber && <span className='text-red-600'>{errors.phoneNumber.message}</span>}
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className='text-red-600' >{errors.password.message}</span>}
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" {...register('gender', { required: 'Gender is required' })}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
            {errors.gender && <span className='text-red-600'>{errors.gender.message}</span>}
          </Form.Group>

          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" {...register('role', { required: 'Role is required' })}>
              <option value="">Select Role</option>
             { userGroups.length > 0 && userGroups.map((item,index)=>{
              return (
                <option value={item.id} key={`group-${index}`}>{item.name}</option>

              )
             }) }
              
            </Form.Control>
            {errors.role && <span className='text-red-600'>{errors.role.message}</span>}
          </Form.Group>

          <Button className='Submit' variant="primary" type="submit">
            Create User
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

// const FetGroup = async () => {
//   return await axios.get('http://localhost:8080/api/v1/group/read');
// };

export default CreateUserModal;
