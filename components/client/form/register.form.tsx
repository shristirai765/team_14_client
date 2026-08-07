"use client"

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { registerSchema } from "@/schemas/register.schema";
import { TRegister } from "@/types/register.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const RegisterForm = () => {

        const {register, handleSubmit, formState: {errors}} = useForm({
          defaultValues: {
            full_name: "",
            phone: "",
            email: "",
            password: "",
            c_password: ""
          },
          resolver: yupResolver(registerSchema),
        })
  
       const onSubmit = ((data: TRegister )=>{
         console.log("account created", data);

        })
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1' >
        <Input
            label="Full Name"
            id="full_name"
            type="text"
            name="full_name"
            placeholder="John Doe"
            error= {errors?.full_name?.message}
            register={register}
            required
        />
        <Input
            label="Phone Number"
            id="phone"
            // type="number"
            name="phone"
            placeholder="9800000000"
            error= {errors?.phone?.message}
            register={register}
            required
        />
        <Input
          label='Email'
          placeholder='johndoe@gmail.com'
          type='email'
          name='email'
          id='email'
          error= {errors?.email?.message}
          register={register}
          required
        />
        <Input
          label='Password'
          placeholder='Enter your password'
          type='password'
          name='password'
          id='password'
          error= {errors?.password?.message}
          register={register}
          required
        />
        <Input
          label='Confirm Password'
          placeholder='Enter your password again'
          type='password'
          name='c_password'
          id='c_password'
          error= {errors?.c_password?.message}
          register={register}
          required
        />
        <div className='mt-5'>
          <Button
            type='submit'
            label='Register'
          />
        </div>
    </form>
   
  )
}

export default RegisterForm;
