import { FC } from "react"
import { UseFormRegister } from "react-hook-form"

interface IProps{
    label: string,
    name: string,
    id: string,
    type?: "text" | "email" | "password" | "number",
    placeholder: string,
    register: UseFormRegister<any>
    error?: string
}
const Input: FC<IProps> = ({ error, register,id, label, name, placeholder, type = "text"}) => {
  return (
    <div className="flex flex-col gap-2">
        <label className=" text-[18px] font-[600]" htmlFor={id}>{label}</label>
        <input
            {...register(name, {required: true})}
            id= {id}
            type= {type}
            placeholder= {placeholder}
            // value={value}
            className={`accent-primary py-3.5 border px-2 text-sm placeholder:text-sm 
              ${error? 'border-red-500 focus:outline-red-500': 'border-primary focus:outline-primary-active'} px-2 rounded-sm 
             `}
          />
        <small
          className="h-5 text-red-500 text-xs"
        >{error}</small>
    </div>
  )
}

export default Input
