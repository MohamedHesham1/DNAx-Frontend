import axios from "axios";
import { VITE_API_BASE_URL } from "src/configs/api";

const token = localStorage.getItem("userToken");
const apiInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const Api = {
  get: (endpoint, params) => apiInstance.get(endpoint, { params }),
  post: (endpoint, data) => apiInstance.post(endpoint, data),
  put: (endpoint, data) => apiInstance.put(endpoint, data),
  delete: (endpoint, params) => apiInstance.delete(endpoint, { params }),
  call: (method, endpoint, data, params) =>
    apiInstance({
      method,
      url: endpoint,
      data,
      params,
    }),
};
