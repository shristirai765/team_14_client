import api from ".";

export const getAllWishList = async()=>{
    try{
        const response = await api.get("/wishList");
        return response.data;
    }catch(error: any){
        throw error?.response?.data;
    }
}

export const addToWishList = async (productId: string) =>{
    try{
        const response = await api.post("/wishList", {productId});
        return response.data;
    }catch(error:any){
        throw error?.response?.data;
    }
}

export const removeWishList = async(productId: string)=>{
    try{
        const response = await api.delete(`/wishList/${productId}`);
        return response.data;
    }catch(error: any){
        throw error?.response?.data;
    }
}