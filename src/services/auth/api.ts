import {nextAuthLoginResponseData, User} from "./types";
import {API} from "../../config/api";

export const loginApi = async (userData: nextAuthLoginResponseData) => {
  const { data } = await API.post('/api/auth/login', userData.user, {
    headers: {
      Authorization: `Bearer ${userData.accessToken}`
    }
  })
  return data.data
}
