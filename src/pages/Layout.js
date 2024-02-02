import React from 'react'
import { Outlet } from 'react-router-dom'

import FirstNavbar from '../fragments/FirstNavbar'
import SecondNavbar from '../fragments/SecondNavbar'
import Footer from '../fragments/Footer'

function Layout() {
  return (
    <div className='flex flex-col'>
      <FirstNavbar />
      <SecondNavbar />
      <div className="h-screen flex flex-col justify-between">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout