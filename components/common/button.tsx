import React from 'react'
interface IProps{
    label: string,
    type?: 'button' | 'submit' | 'reset',
    onClick?: ()=>{}
}
const Button = ({ label, type = 'button', onClick }: IProps) => {
    return (
        <button
            className='cursor-pointer rounded-sm w-full py-3.5 bg-primary
             text-text-on-primary font-bold text-[18px] hover:bg-primary-hover 
             active:bg-primary-active transition-all duration-300'
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button
