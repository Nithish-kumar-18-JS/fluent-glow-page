import { BASEURL } from "../index";
import AxiosInstance from "../axios";

export const getUserProfile = async () => {
    try {
        const response = await AxiosInstance.get(`${BASEURL}/user/profile`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const onBoarding = async (data: any) => {
    try {
      const response = await AxiosInstance.post(
        `${BASEURL}/user/onboarding`,
        data,
      );
      return response.data;
    } catch (error) {
      console.log("onBoarding error:", error);
      throw error;
    }
  };

  export const checkOnBoarding = async () => {
    try {
      const response = await AxiosInstance.get( `${BASEURL}/user/checkOnboarding`);
      return response.data;
    } catch (error) {
      console.log("checkOnBoarding error:", error);
      throw error;
    }
  };
  