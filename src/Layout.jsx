import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-sky-100">
      <header className="shadow-sm bg-white/70 backdrop-blur sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-1">
        <section className="px-4 py-8">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Layout
