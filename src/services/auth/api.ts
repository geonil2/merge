import {nextAuthLoginResponseData, User} from "./types";
import {API} from "../../config/api";
import {isServer} from "../utils";

export const loginApi = async (userData: nextAuthLoginResponseData) => {
  console.log(userData.accessToken, 'userData?')
  const { data } = await API.post('/api/auth/login', userData.user, {
    headers: {
      Authorization: `Bearer ${userData.accessToken}`
    }
  })
  return data.data
}
