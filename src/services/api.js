import axios from "axios";
import { VITE_API_BASE_URL } from "../configs/api";

const apiInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
});

export const Api = {
  get: (endpoint, params) =>
    apiInstance.get(endpoint, { params, headers: getHeaders() }),
  post: (endpoint, data) =>
    apiInstance.post(endpoint, data, { headers: getHeaders() }),
  put: (endpoint, data) =>
    apiInstance.put(endpoint, data, { headers: getHeaders() }),
  delete: (endpoint, params) =>
    apiInstance.delete(endpoint, { params, headers: getHeaders() }),
  call: (method, endpoint, data, params) =>
    apiInstance({
      method,
      url: endpoint,
      data,
      params,
      headers: getHeaders(),
    }),
  setToken: (token) => {
    apiInstance.defaults.headers.common["Authorization"] = token
      ? `Bearer ${token}`
      : null;
  },
};

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};
