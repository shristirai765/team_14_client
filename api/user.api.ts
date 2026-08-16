import { TUser } from "@/types/user.type";
import api from ".";


export const getAllUsers = async ()=>{
   try{
     const response = await api.get("/users");
        
        console.log(response);
        return response?.data;
   }catch(error: any){
    console.log(error);
    throw error?.response?.data;
   }

}