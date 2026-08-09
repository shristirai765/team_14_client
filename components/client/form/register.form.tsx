"use client"

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { registerSchema } from "@/schemas/register.schema";
import { TRegister } from "@/types/register.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {register as registerUser} from "@/api/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterForm = () => {

        const router = useRouter();
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

        // mutation
        const {data, isPending, error, mutate} = useMutation({
          mutationFn: registerUser,
          onSuccess: (response)=>{
            // console.log("register success", response);
            toast.success(response?.message ?? "Account created");
            router.replace("/login");
          },
          onError: (error: any)=>{
            toast.error(error?.message ?? "Request failed")
            // console.log("on register error", error);
          }
        })
  
       const onSubmit = ((data: TRegister )=>{
        //  console.log("account created", data);
         mutate(data);

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
        />
        <Input
            label="Phone Number"
            id="phone"
            // type="number"
            name="phone"
            placeholder="9800000000"
            error= {errors?.phone?.message}
            register={register}
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
