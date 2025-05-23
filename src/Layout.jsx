import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
        
            <div className='text-center align-middle text-5xl bg-blue-900 text-white shadow-lg pt-7 pb-7'> 
                <strong>Univ List</strong>
            </div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout;