import {nextAuthLoginResponseData, TOKEN_STORAGE_KEY, User} from "./types";
import {API} from "../../config/api";
import {isServer} from "../utils";

export const loginApi = async (userData: nextAuthLoginResponseData) => {
  console.log(userData.accessToken, 'userData?')
  const response = await API.post('/api/auth/login', userData.user, {
    headers: {
      Authorization: `Bearer ${userData.accessToken}`
    }
  })
  console.log(response.data,'로인데이터')
  return response.data
}

export const setTokenInStorage = (token: string) => {
  if (!isServer) {
    console.log(token, 'set token in storage')
    window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
  }
}

export const removeTokenInStorage = () => {
  if (!isServer) {
    window.localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}
