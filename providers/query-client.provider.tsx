"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

// wrapper component
const client = new QueryClient();
const ClientQueryClientProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
  )
}

export default ClientQueryClientProvider
