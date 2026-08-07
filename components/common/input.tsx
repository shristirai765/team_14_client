import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { FaAsterisk } from "react-icons/fa6";

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
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex gap-0.5'>
                <label className='text-sm font-semibold' htmlFor={id}>{label}</label>
                {required && <FaAsterisk size={10} className='text-primary mt-0.5' />}
            </div>

            <input
                {...register(name)}
                id={id}
                placeholder={placeholder}
                type={type}
                className={`accent-primary py-3.5 border px-2 rounded-sm  text-sm placeholder:text-sm
                    ${error ? 'border-red-500 focus:outline-red-500' : 'border-primary-light focus:outline-primary-active'} 
                    `}
            />
            <small
                className='h-5 text-red-500 text-xs'
            >{error}</small>
        </div>
    )
}

export default Input