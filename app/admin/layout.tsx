import AdminHeader from '@/components/admin/layout/header'
import AdminSidebar from '@/components/admin/layout/sidebar'
import Nav from '@/components/client/layout/nav'
import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <main className='flex h-screen bg-blue-50  '>
        {/* sidebar */}
        <AdminSidebar/>
        {/* header */}
        <section className='w-full h-full relative'>
            <AdminHeader/>
        
            {/* page */}
            <section className='h-[clac(h-screen-64px)] absolute top-16 z-1 overflow-y-auto mt-7 ml-10 '>
                {children}
            </section>
        </section>
        
      
    </main>
  )
}

export default Layout
