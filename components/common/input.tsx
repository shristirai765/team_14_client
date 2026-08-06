import { FC } from "react"
import { UseFormRegister } from "react-hook-form"

interface IProps{
    label: string,
    name: string,
    id: string,
    type?: "text" | "email" | "password" | "number",
    placeholder: string,
    // onChange?: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=> void,
    // value: string,
    register: UseFormRegister<any>
}
const Input: FC<IProps> = ({ register,id, label, name, placeholder, type = "text"}) => {
  return (
    <div className="flex flex-col gap-2">
        <label className=" text-[18px] font-[600]" htmlFor={id}>{label}</label>
        <input
            // onChange={(e)=>{}}
            {...register(name)}
            // onChange={onChange}
            id= {id}
            // name= {name}
            type= {type}
            placeholder= {placeholder}
            // value={value}
            className="py-2.5 border border-primary px-2 rounded-sm focus:outline-primary text-[18px] placeholder:text-[18px]"
        />
    </div>
  )
}

export default Input
