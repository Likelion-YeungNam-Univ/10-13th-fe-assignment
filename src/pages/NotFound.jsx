import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center text-3xl p-5">
        <p className="text-5xl m-7">🛑 404 Error 🛑</p>
        <p className="m-5">The page you are looking for does not exist! 😂</p>
        <a
            href="/"  className="p-3 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-full"
        >
            홈으로 돌아가기
        </a>
    </div>
  )
}

export default NotFound;