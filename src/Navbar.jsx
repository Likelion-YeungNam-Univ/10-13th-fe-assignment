import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
        <div className='text-center align-middle text-5xl bg-blue-900 text-white shadow-lg pt-7 pb-7'> 
            <Link to="/"><strong>Univ List</strong></Link>
        </div>
        <div className='flex justify-between items-center bg-navy-200 shadow-lg px-30 py-2'>
            <Link to="/asia" className="hover:bg-blue-800  hover:text-white hover:rounded-lg px-3 py-1 font-bold">Asia</Link>
            <Link to="/europe" className="hover:bg-blue-800  hover:text-white hover:rounded-lg px-3 py-1 font-bold">Europe</Link>
            <Link to="/northAmerica" className="hover:bg-blue-800  hover:text-white hover:rounded-lg px-3 py-1 font-bold">North America</Link>
            <Link to="/southAmerica" className="hover:bg-blue-800  hover:text-white hover:rounded-lg px-3 py-1 font-bold">South America</Link>
            <Link to="/oceania" className="hover:bg-blue-800  hover:text-white hover:rounded-lg px-3 py-1 font-bold">Oceania</Link>
            <Link to="/africa" className="hover:bg-blue-800  hover:text-white hover:rounded-lg px-3 py-1 font-bold">Africa</Link>
            <Link to="/all" className="hover:bg-blue-800  hover:text-white hover:rounded-lg px-3 py-1 font-bold">All</Link>
        </div>
    </div>
    
  )
}

export default Navbar;