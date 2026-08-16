import Image from 'next/image'
import React from 'react'

const AuthSection = () => {
  return (
    <div className='flex items-center gap-3'>
        {/* profile image */}
        <div className='h-14 aspect-square rounded-full p-1 mt-2 overflow-clip border border-primary'>
            <Image
                src={'/nayeon.jpg'}
                alt='user profile image'
                height={1000}
                width={1000}
                className='h-full w-full rounded-full'
            />
        </div>
        {/* name and logout */}
        <div>
            <h4 className='text-white'>John DOe</h4>
            <p className='text-primary'>Logout</p>
        </div>
      
    </div>
  )
}

export default AuthSection
