import AuthContext from "@/contexts/auth.context";
import { useContext } from "react"

export const useAuth = ()=>{
    if(!AuthContext){
        console.log("useAuth hook must be used inside auth provider");
    }
    return useContext(AuthContext);
};