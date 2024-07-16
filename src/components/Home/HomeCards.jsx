import React from 'react'
import Card from './Card'
import { NavLink } from 'react-router-dom'
const  HomeCards = () =>{
  const classLink = 'inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
  return (
    <>
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
            <h2 class="text-2xl font-bold">For Developers</h2>
            <p class="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
          <NavLink to="/jobs" className={classLink}>
              Browse Jobs
              </NavLink>
            </Card>
            <Card>
                <h2 class="text-2xl font-bold">For Employers</h2>
            <p class="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <NavLink to="/jobs" className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>
          User
              </NavLink>
            </Card>
        </div>
      </div>
    </section>

    
    </>
  )
}

export default HomeCards