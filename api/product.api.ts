import api from ".";


export const createProduct = async (data: FormData) => {
  const response = await api.post("/products", data);

  return response.data;
};

//* get all products

export const getAllProducts = async()=>{

  try{
    const response = await api.get("/products");
    return response?.data;

  }catch(error:any){
    throw error?.response?.data;
  }
}

//* get all
export const getAllFeaturedProducts = async() =>{
    try{

        const response = await api.get("/products");
        return response?.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error: any){
        throw error?.response?.data;
    }
}