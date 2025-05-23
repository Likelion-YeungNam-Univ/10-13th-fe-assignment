import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="bg-blue-300 flex flex-col justify-center items-center min-h-screen text-center text-3xl p-5">
        <p className="text-5xl m-7 font-bold pb-20">🛑 404 Error 🛑</p>
        <p className="m-5 pb-10 "><i>The page you are looking for does not exist! 😂</i></p>
        <Link
            to="/"  className="p-5 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-2xl"
        >
            Go to Home
        </Link>
    </div>
  )
}

export default NotFound;