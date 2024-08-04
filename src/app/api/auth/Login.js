import { axiosInstance } from "../BaseAPI";

export const login = async (userData) => {
    const response = await axiosInstance.post('login', userData);
    return response;
}