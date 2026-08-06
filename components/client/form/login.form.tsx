"use client"

import Button from '@/components/common/button'
import Input from '@/components/common/input'
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/schemas/auth.schema';
import { TLogin } from '@/types/auth.type';

// * login schema
// const loginSchema = yup.object({
//   email: yup.string().email().required("need email"),
//   password: yup.string().required("password is required")
// })

const LoginForm = () => {

  const {register, watch, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(loginSchema)
  })
 
   const onSubmit = ((data: TLogin)=>{
    console.log("login submitted", data);

  })
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'  >
        <Input
          label='Email'
          placeholder='johndoe@gmail.com'
          type='text'
          name='email'
          id='email'
          error= {errors?.email?.message}
          register={register}
        />
        <Input
          label='Password'
          placeholder='Enter your password'
          type='password'
          name='password'
          id='password'
          error= {errors?.password?.message}
          register={register}
        />
        <div className='mt-5'>
          <Button
            type='submit'
            label='Login'
          />
        </div>
        
      </form>
    // <div className='border-200px flex flex-col items-center pt-[10px]'>
    //   <h1 className='text-xl font-bold '>Login form</h1>
    //   <form className='pt-[30px]'>
    //     <label htmlFor="name">Name</label>
    //     <input
    //       id='name' 
    //       className='text-cyan-900 block h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' 
    //       type="text" 
    //       placeholder='Enter your full name' 
    //     /><br />
    //     <label htmlFor="phone">Phone</label>
    //     <input 
    //       id='phone'
    //       className='text-cyan-900 block h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
    //       type="number" 
    //       placeholder='Enter your number' 
    //     /><br />
    //     <label htmlFor="email">Email</label>
    //     <input
    //       id='email' 
    //       className='text-cyan-900 block h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' 
    //       type="text" 
    //       placeholder='Enter your email' 
    //     /><br />
    //     <label htmlFor="password">Password</label>
    //     <input 
    //       id='password'
    //       className=' text-cyan-900 block h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' 
    //       type="password" 
    //       placeholder='Enter your password' 
    //     /><br />

    //   </form>
    //   <button className='bg-red-600 rounded-md p-1 w-14 shadow-sm' type='submit'>submit</button>
    // </div>
  )
}

export default LoginForm
