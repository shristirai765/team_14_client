import React from 'react'
import ClientQueryClientProvider from './query-client.provider'
import WishlistProvider from './wishlist.provider'

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ClientQueryClientProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </ClientQueryClientProvider>
  )
}

export default Providers
