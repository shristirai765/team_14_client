import { TLogin } from "@/types/auth.type"
import { TRegister } from "@/types/register.type";
import axios from "axios"


export const login = async (data: TLogin)=>{
   try{
     const response = await axios.post("http://localhost:8080/api/v1/auth/login",
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
     const response = await axios.post("http://localhost:8080/api/v1/auth/register",
            data,
        );
        
        console.log(response);
        return response.data;
   }catch(error: any){
    console.log(error);
    throw error.response.data;
   }

}