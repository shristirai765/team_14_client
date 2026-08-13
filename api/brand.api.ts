import api from ".";

export const createBrand = async (data: FormData) => {
  const response = await api.post("/brands", data);

  return response.data;
};