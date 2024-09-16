import Header from '@/components/Header'
import SideBar from '@/components/Sidebar'

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