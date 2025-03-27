import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/adverts", payload);

export const apiGetAllAdverts = async () => apiClient.get("/adverts");

export const apiGetVenderAdverts = async () => apiClient("/adverts/vendor");

// using path param
// specify the path param in order
export const apiUpdateAdvert = async (id, payload) =>
  apiClient.put(`/adverts/vendor/${id}`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiGetAdvertbyId = async (id) =>
  apiClient(`/adverts/:id/${id}`, payload);

export const apiGetVendorAdvertbyId = async (id) =>
  apiClient.get(`/adverts/vendor/${id}`);

export const apiDeleteVendorAdvertbyId = async (id) =>
  apiClient.delete(`/adverts/vendor/${id}`);
