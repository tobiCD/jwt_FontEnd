import React, { useEffect } from 'react';
import './Roles.scss';
import _ from 'lodash';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Roles = () => {

  const dataChildefault = {url : '', description:'',isValidUrl:true}
    const [listChilds, setListChilds] = useState({
        child1: dataChildefault,
    });

    const handleOnInput = (name, value, key) => {
        let _listChilds = _.cloneDeep(listChilds);
        _listChilds[key][name] = value;
        if(value && name ==='url'){
          _listChilds[key]['isValidUrl']= true
        }
        setListChilds(_listChilds);
    };

    const handleAddNew = () => {
        let _listChilds = _.cloneDeep(listChilds);
        const newKey = `child-${uuidv4()}`;
        _listChilds[newKey] = dataChildefault
        setListChilds(_listChilds);
    };

    const handleDelete = (key) => {
        let _listChilds = _.cloneDeep(listChilds);
        delete _listChilds[key];
        setListChilds(_listChilds);
    };
    const handleSave = ()=>{
      console.log(listChilds)
      let inValidObj =  Object.entries(listChilds).map(([key, child],index) => { 
        return child && !child.url;
      })
      if(!inValidObj)
      {}
    else{
        console.log('>>invalid :', inValidObj)
        let _listChilds = _.cloneDeep(listChilds);
        const key = inValidObj[0]
        
        _listChilds[key]['isValidUrl']=false;
        console.log(listChilds)
    }
    }
    
    
    

    useEffect(() => {
      console.log('Current listChilds:', listChilds);
  }, [listChilds]);
    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add a new Role</h2>
            <form className="">
                {Object.entries(listChilds).map(([key, child],index) => {
                    return (
                        <div className='container flex gap-2' key={key}>
                            <div className="mb-4">
                                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1 0">
                                    URL
                                </label>
                                <input

                                    type="url"
                                    id="url"
                                    value={child.url}
                                    onChange={(e) => handleOnInput('url', e.target.value, key)}
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
                                    value={child.description}
                                    onChange={(e) => handleOnInput('description', e.target.value, key)}
                                    // required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Nhập mô tả"
                                />
                            </div>
                            <div className="inline-flex space-x-3 whitespace-nowrap text-right text-sm font-medium ">
                                <button
                                    type="button" // Change to button to prevent form submission
                                    onClick={() => handleAddNew()}
                                    className=""
                                >
                                    Create
                                </button>
                                {index >=1 &&<button
                                    type="button" // Change to button to prevent form submission
                                    onClick={() => handleDelete(key)}
                                    className=""
                                >
                                    Delete
                                </button>
                              }
                            </div>
                        </div>
                    );
                })}
                <div className='w-full flex justify-center'>
                    <button onClick={handleSave} className='py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Roles;
