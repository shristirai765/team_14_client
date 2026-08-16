import React from 'react'
import ClientQueryClientProvider from './query-client.provider'
import WishlistProvider from './wishlist.provider'
import AuthProvider from './auth.provider'

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ClientQueryClientProvider>
      <AuthProvider>
        <WishlistProvider>
            {children}
        </WishlistProvider>
      
      </AuthProvider>
    </ClientQueryClientProvider>
  )
}

export default Providers
