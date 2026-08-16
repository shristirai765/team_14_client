"use client"
import { getProfile, loginUser, logoutUser } from '@/api/auth.api'
import AuthContext from '@/contexts/auth.context'
import { TLogin } from '@/types/auth.type'
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
    const {mutate: loginMutation, isPending: loginPending} = useMutation({
        mutationFn: loginUser,
        onSuccess: (response)=>{
            toast.success(response.message ?? "login successful")
        },
        onError: (error:any)=>{
            toast.error(error.message ?? "something went wrong")
        }
    })
    const logout = ()=>{
        logoutMutation();
    }
    const login = (data: TLogin)=>{
        loginMutation(data);
    }
    const registerUser = ()=>{
        
    }
    
  return (
    <AuthContext value={{
        isLoading: !!isLoading || !!isPending,
        login,
        logout,
        registerUser,
        user: data?.data ?? null
    }}>
        {children}
      
    </AuthContext>
  )
}

export default AuthProvider
