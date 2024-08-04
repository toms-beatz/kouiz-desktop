import { axiosInstance } from "../BaseAPI";

export const listAllUsers = async (token) => {
    try {
        const response = await axiosInstance.get('/admin/users/all',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        // Gérer les erreurs ici, par exemple, renvoyer une erreur ou un message d'erreur
        throw error;
    }
}
