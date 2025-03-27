import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/adverts", payload);


export const apiGetAllAdverts = async () => apiClient.get("/adverts");

export const apiGetVenderAdverts = async () => apiClient("/adverts/vendor");

export const apiGetAllAdverts = async (filterType, filter) => {
  console.log(filterType, filter);
  return apiClient.get(`/adverts?filterType=${filterType}&filter=${filter}&sort=createdAt&order=desc`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

export const apiGetVenderAdverts = async () =>
  apiClient("/adverts/vendor", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });


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

  apiClient(`/adverts/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

