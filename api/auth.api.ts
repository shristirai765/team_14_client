import { TLogin } from "@/types/auth.type"
import { TRegister } from "@/types/register.type";
// import axios from "axios"
import api from ".";


export const login = async (data: TLogin)=>{
   try{
     const response = await api.post("/auth/login",
            data,
        );
        
        console.log(response);
        return response.data;
   }catch(error: any){
    console.log(error);
    throw error.response.data;
   }

}

export const register = async (data: TRegister)=>{
   try{
     const response = await api.post("/auth/register",
            data,
        );
        
        console.log(response);
        return response.data;
   }catch(error: any){
    console.log(error);
    throw error.response.data;
   }

}