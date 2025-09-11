import axios from "axios";
import AxiosInstance from "../axios";
import { BASEURL } from "../index";

export const verifyUser = async (idToken:string) => {
    try {
        const response = await axios.get(`${BASEURL}/auth/verify?idToken=${idToken}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}