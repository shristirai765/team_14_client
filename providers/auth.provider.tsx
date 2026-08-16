"use client"
import { getProfile, logoutUser } from '@/api/auth.api'
import AuthContext from '@/contexts/auth.context'
import { useMutation, useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const {data, isLoading} = useQuery({
        queryFn: getProfile ,
        queryKey: ['auth', 'me'],
        retry: false,
        refetchInterval: 5* 60 * 1000,
        refetchOnWindowFocus: true
    })

    const {mutate: logoutMutation, isPending} = useMutation({
        mutationFn: logoutUser,
        onSuccess: (response)=>{
            toast.success(response.message ?? "logout successful")
        },
        onError: (error:any)=>{
            toast.error(error.message ?? "something went wrong")
        }
    })
    const logout = ()=>{
        logoutMutation();
    }
    const login = ()=>{
        
    }
    const registerUser = ()=>{
        
    }
    
  return (
    <AuthContext value={{
        isLoading: !!isLoading || !!isPending,
        login,
        logout: logoutMutation,
        registerUser,
        user: data?.data ?? null
    }}>
        {children}
      
    </AuthContext>
  )
}

export default AuthProvider
