import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='text-center align-middle text-5xl bg-blue-900 text-white shadow-lg pt-7 pb-7'> 
            <strong>Univ List</strong>
        </div>
        <div className='flex justify-between items-center bg-navy-200 shadow-lg px-30 py-2'>
            <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Asia</div>
            <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Europe</div>
            <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">North America</div>
            <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">South America</div>
            <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Oceania</div>
            <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Africa</div>
        </div>
    </div>
    
  )
}

export default Navbar;