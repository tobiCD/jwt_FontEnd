import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FetGroup ,CreatUser,EditUser } from '../../services/userService';
import axios from 'axios';
import './Users.scss';
import { GrOptimize } from 'react-icons/gr';
import { data } from 'autoprefixer';

const CreateUserModal = ({ show, handleClose, fetchUser,action,dataModalUser}) => {
  const { register, handleSubmit, formState: { errors },setValue,reset } = useForm();
  const [userGroups, setUserGroups] = useState([]); // gọi data group 


  useEffect(() => {
    getGroups();
   
  }, []);

  //for edit
  useEffect(()=>{ // form reset khi chuyển giữa edit và Creat
    if (action === 'EDIT') {
      reset({
        id : dataModalUser.id,
        username: dataModalUser.username,
        email: dataModalUser.email,
        password: dataModalUser.password,
        phoneNumber: dataModalUser.phoneNumber,
        gender: dataModalUser.gender,

        role: dataModalUser.Group.id ? dataModalUser.Group.id.toString() : ''
      });
    } else {
      reset({
        id : '',
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: '',
        role: ''
      });
    }
  },[action, dataModalUser, setValue,])// 

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

 

const onSubmit = async (data) => {/// 
    try {
      console.log(data)
   
        const response = action ==='CREATE' ? 
        await CreatUser(data):
        await EditUser(data);
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
  const handleCloseModalUser =()=>{
    handleClose();
  }

  return (
    <Modal show={show} onHide={()=>{handleCloseModalUser()}}>
      <Modal.Header closeButton>
        <Modal.Title>{action==='CREATE' ? 'Create new user' :'Edit user'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formId">
            <Form.Control
              hidden
              type="id"
              placeholder="id"
              disabled ={ action === 'CREATE' ? false : true}
              {...register('id',)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              disabled ={ action === 'CREATE' ? false : true}
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group controlId="formUsername">
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
              disabled ={ action === 'CREATE' ? false : true}
              {...register('phoneNumber', { required: 'Phone number is required' })}
            />
            {errors.phoneNumber && <span className='text-red-600'>{errors.phoneNumber.message}</span>}
          </Form.Group>
     {
      action ==='CREATE'&&
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autoComplete='current-passwor'
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className='text-red-600' >{errors.password.message}</span>}
          </Form.Group>
        }
     

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" {...register('gender', )}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
            {errors.gender && <span className='text-red-600'>{errors.gender.message}</span>}
          </Form.Group>

          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" {...register('role', )}>
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
          
            {action === 'CREATE' ? 'Create User' : 'Update'}
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
