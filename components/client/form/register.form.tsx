"use client"

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { useState } from "react";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        phone: "",
        email: "",
        password: "",
        c_password: ""
      })
      const onChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prev)=>{
          return {
            ...prev,
            [name]: value
          }
        })
      }
       const onSubmit = ((e: React.SubmitEvent<HTMLFormElement>)=>{
          e.preventDefault();
          console.log("account created", formData);

        })
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-6' >
        <Input
            label="Full Name"
            id="full_name"
            type="text"
            name="full_name"
            placeholder="John Doe"
            value= {formData.full_name}
            onChange={onChange}
        />
        <Input
            label="Phone Number"
            id="phone"
            type="number"
            name="phone"
            placeholder="9800000000"
            value= {formData.phone}
            onChange={onChange}
        />
        <Input
          label='Email'
          placeholder='johndoe@gmail.com'
          type='email'
          name='email'
          id='email'
          value= {formData.email}
          onChange={onChange}
        />
        <Input
          label='Password'
          placeholder='Enter your password'
          type='password'
          name='password'
          id='password'
          value= {formData.password}
          onChange={onChange}
        />
        <Input
          label='Confirm Password'
          placeholder='Enter your password again'
          type='password'
          name='c_password'
          id='c_password'
          value= {formData.c_password}
          onChange={onChange}
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
