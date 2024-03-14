import axios from 'axios';
const { VITE_API_BASE_URL } = import.meta.env;

export const Api = {
  post: (endpoint, data, headers) =>
    axios.post(`${VITE_API_BASE_URL}${endpoint}`, data, { headers }),
};
