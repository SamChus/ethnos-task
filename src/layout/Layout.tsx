import Header from '@/components/Header'
import Main from '@/components/Main'
import SideBar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <SideBar />
        <Header />
      <div className='pl-[80px] md:pl-[120px]'>
          <Outlet />
      </div>
    </>
  );
}

export default Layout