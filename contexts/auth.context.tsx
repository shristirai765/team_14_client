import { TLogin } from "@/types/auth.type";
import { TRegister } from "@/types/register.type";
import { TUser } from "@/types/user.type";
import { createContext } from "react";

type TAuthContext = {
    user: TUser[] | null,
    login:(data: TLogin)=> void,
    registerUser: (data: TRegister)=> void,
    logout: ()=> void,
    isLoading: boolean
}
const initialValue : TAuthContext = {
    user: null,
    isLoading: false,
    login: ()=>{},
    registerUser: ()=>{},
    logout: ()=>{}
}

const AuthContext = createContext<TAuthContext>(initialValue);

export default AuthContext;