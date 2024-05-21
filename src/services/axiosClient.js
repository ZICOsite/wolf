import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        accept: 'application/json',
    }
})

axiosClient.interceptors.request.use(async (config) => {
    return config
});

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    throw error;
});

export default axiosClient;