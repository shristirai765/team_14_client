
// get all

import api from ".";

export const createCategory = async(data: FormData)=>{

    const response = await api.post("/categories",data);

    return response.data;
};

export const getAllCategories = async() =>{
    try{

        const response = await api.get("/categories");
        return response?.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error: any){
        throw error?.response?.data;
    }
}