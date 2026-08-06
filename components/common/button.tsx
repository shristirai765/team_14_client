import React from 'react'
interface IProps{
    label: string,
    type?: 'button' | 'submit' | 'reset'
}
const Button = ({label , type}:IProps) => {
  return (
    <div className='mt-2'>
        <button 
            className='cursor-pointer rounded-sm w-full py-3 bg-primary text-text-on-primary font-bold text-[18px] hover:bg-primary-hover active:bg-primary-active transition-all duration-300'
            type= {type}
        >
            {label}
        </button>
    </div>
  )
}

export default Button
