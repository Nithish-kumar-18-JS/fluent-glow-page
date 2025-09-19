import { BASEURL } from "../index";
import AxiosInstance from "../axios";

export const getWords = async () => {
    try {
        const response = await AxiosInstance.get(`${BASEURL}/words/getwords`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const updateWords = async (data) => {
    try {
        const response = await AxiosInstance.post(`${BASEURL}/words/save_word`,data);
        return response
    } catch (error) {
        console.log(error)
    }
}