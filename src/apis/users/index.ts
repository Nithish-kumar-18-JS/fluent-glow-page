import axios from "axios";

export const getUserProfile = async () => {
    try {
        const response = await axios.get("http://localhost:3000/user/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
}