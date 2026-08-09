import React, { FC, useState } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { FaAsterisk } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface IProps {
    label: string;
    name: string,
    id: string,
    type?: 'text' | 'password' | 'email'
    placeholder: string,
    register: UseFormRegister<any>,
    error?: string
    required?: boolean
}

const Input: FC<IProps> = ({ id, label, name, placeholder, type = 'text', register, error, required = false }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onClick = ()=>{
        setShowPassword(!showPassword);
    }
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex gap-0.5'>
                <label className='text-sm font-semibold' htmlFor={id}>{label}</label>
                {required && <FaAsterisk size={10} className='text-primary mt-0.5' />}
                {/* {type === "password" && <LuEyeClosed onClick={onClick} className=' size-3.5 mt-1'/>} */}
            </div>

           <div className={`flex items-end accent-primary border rounded-sm  text-sm placeholder:text-sm
                        
                    `}
            >
                <input
                    {...register(name)}
                    id={id}
                    placeholder={placeholder}
                    className={`w-full border accent-primary py-3.5 px-2 rounded-sm  text-sm placeholder:text-sm placeholder-white-900
                        ${error ? 'border-red-500 focus:outline-red-500' : 'border-primary-light focus:outline-primary-active'}`}
                    type={!showPassword && type==="password" ? "password" : "text"}
                    // type= {type}
                    
                />
                <div className='text-md size-8 mr-0 '>
                    {type === "password" && (showPassword ? <MdOutlineRemoveRedEye onClick={onClick}/> : <LuEyeClosed onClick={onClick}/>)}
                    
                </div>
           </div>
                
            
            <small
                className='h-5 text-red-500 text-xs'
            >{error}</small>
        </div>
    )
}

export default Input