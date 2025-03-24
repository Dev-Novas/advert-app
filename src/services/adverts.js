import { apiClient } from "./config";

export const apiAddAdvert = async(payload) =>  apiClient.post("/adverts",payload);

export const apiGetAllAdverts = async() =>  apiClient.get("/adverts");

export const apiGetVenderAdverts = async()=>  apiClient("/vendor-adverts");

// using path param
// specify the path param in order
export const apiUpdateAdvert = async (id, payload) => apiClient(`/adverts/${id}`, payload);

export const apiGetAdvertbyId = async (id) => apiClient(`/adverts/:id/${id}`, payload);