import React from 'react'
import './Roles.scss'
import { useState } from 'react';
const Roles =() =>{
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Xử lý logic thêm role ở đây
      console.log('URL:', url);
      console.log('Description:', description);
    };
  
    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add a new Role</h2>
        <form onSubmit={handleSubmit} className="">
            <div className='container flex gap-2'>
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập mô tả"
              rows="4"
            />
            
          </div>
          <div className="inline-flex space-x-3 whitespace-nowrap text-right text-sm font-medium ">
            <button
              type="submit"
              className=" py-2 px-text-indigo-600 hover:text-indigo-900"
            >
              Create 
            </button>

                <button
              type="submit"
              className="py-2 px-text-indigo-600 hover:text-indigo-900"
            >
              Delete 
            </button>
            
          </div>
          </div>
          <div className='w-full flex justify-center'>
            <button className='py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'>Save</button>
            </div>
        </form>
      </div>
    );
  };

export default Roles