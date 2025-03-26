import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/adverts", payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const apiGetAllAdverts = async () => apiClient.get("/adverts",
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });


export const apiGetVenderAdverts = async () =>
  apiClient("/adverts/vendor", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

// using path param
// specify the path param in order
export const apiUpdateAdvert = async (id, payload) =>
  apiClient(`/adverts/${id}`, payload);

export const apiGetAdvertbyId = async (id) =>
  apiClient(`/adverts/:id/${id}`, payload);
