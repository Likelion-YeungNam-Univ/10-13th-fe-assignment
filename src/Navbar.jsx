import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const linkStyle =
  'px-3 py-6 rounded-md text-xl font-bold text-sky-800 hover:text-white hover:bg-sky-500 transition'

const Navbar = () => (
  <nav className="flex flex-wrap gap-2 bg-white/80 backdrop-blur shadow px-4 py-3">
    <NavLink to="/"          className={linkStyle}>Home</NavLink>
    <NavLink to="/daegu1"    className={linkStyle}>대구 음식 골목</NavLink>
    <NavLink to="/daegu2"    className={linkStyle}>대구광역시 맛집</NavLink>
    <NavLink to="/daegu3"    className={linkStyle}>먹거리골목별 음식점</NavLink>
    <NavLink to="/daegu4"    className={linkStyle}>대구 테마별 숙박 시설</NavLink>
  </nav>
)

export default Navbar
