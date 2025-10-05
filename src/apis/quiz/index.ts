import { BASEURL } from "../index";
import AxiosInstance from "../axios";

export const getQuiz = async () => {
    try {
        const response = await AxiosInstance.get(`${BASEURL}/quiz/GetTodayQuiz`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
