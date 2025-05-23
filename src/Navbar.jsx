import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-navy-200 shadow-lg p-4'>
        <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Asia</div>
        <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Europe</div>
        <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">North America</div>
        <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">South America</div>
        <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Oceania</div>
        <div className="hover:bg-blue-800  hover:text-white hover:rounded-lg p-1 font-bold">Africa</div>
    </div>
  )
}

export default Navbar;