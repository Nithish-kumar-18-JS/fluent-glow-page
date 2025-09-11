import axios from "axios";
import { BASEURL } from "./index";

const AxiosInstance = axios.create({
  baseURL: BASEURL,
});

// Request interceptor to add access token to every request

AxiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken"); // Get access token from the local storage
      
  if (accessToken) { // if access token is present, add it to the bearer-token
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
  
      return config;
    },
  
    (error) => { // Error-handling
      console.error("Request error ::", error);
      return Promise.reject(error);
    }
  );

// Response interceptor to handle 401 and 403 response
AxiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
  
  // Check if error response is present and error status is 401 or 403
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        console.error("Response error :: ", error.response);
  
        // fetch new access token
        try {
          const refresh_token_url = BASEURL+"/auth/refresh";
          const response = await axios
            .post(refresh_token_url, {
              refresh: localStorage.getItem("refreshToken"), // Get refresh token from local storage
            });
  
          const newAccesToken = response.data.access;
  
          localStorage.setItem("accessToken", newAccesToken); // Update the access token in local storage
  
          // Re-try the original request
          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${newAccesToken}`;
          return await axios(originalRequest);
  
        } catch (refreshError) {
          // incase of failed refresh, re-direct to login page
          window.location.href = "/";
  
          return await Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

export default AxiosInstance;