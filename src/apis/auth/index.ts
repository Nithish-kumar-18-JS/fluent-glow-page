import axios from "axios";
import AxiosInstance from "../axios";

export const verifyUser = async (idToken:string) => {
    try {
        const response = await axios.get("http://localhost:3000/auth/verify?idToken="+idToken);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}