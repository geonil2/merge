import {API} from "../../config/api";
import {updateNameInputValue} from "../../components/tables/authTable";
import {clearAuth, getTokenInLocalStorage, isServer, setTokenInLocalStorage} from "../utils";
import {RefreshTokenResponseData, SignInRequestBody, SignUpRequestBody, User, UserResponseData} from "./types";

export const signUpAPI = async (body: SignUpRequestBody) => {
  const { data } = await API.post('/api/auth/signup', body)
  setTokenInLocalStorage(data.data.accessToken)
}

export const signInAPI = async (body: SignInRequestBody) => {
  const { data } = await API.post('/api/auth/signIn', body)
  setTokenInLocalStorage(data.data.accessToken)
}

export const signOutAPI = async () => {
  await API.post('/api/auth/signout');
  clearAuth();
}

export const getUserAPI = async () => {
  const { data } = await API.get<UserResponseData>('/api/auth/user')
  return data.data
}

export const updateNameAPI = async (name: updateNameInputValue) => {
  const { data } = await API.put('/api/auth', name)
  return data.data
}

export const refreshTokenAPI = async () => {
  const { data } = await API.get<RefreshTokenResponseData>('/api/auth/refresh');
  setTokenInLocalStorage(data.data.accessToken)
}

export const restoreAuthAPI = async () => {
  if (!isServer) {
    const token = getTokenInLocalStorage();
    if (token) {
      return !!token
    }
  }
  return false
}

export const googleSignInAPI = async (code: string) => {
  const { data } = await API.post('/api/auth/google', { code });
  setTokenInLocalStorage(data.data.accessToken)
}

export const kakaoSignInAPI = async (code: string) => {
  const { data } = await API.post('/api/auth/kakao', { code });
  setTokenInLocalStorage(data.data.accessToken)
}

export const naverSignInAPI = async (code: string) => {
  const { data } = await API.post('/api/auth/naver', { code });
  setTokenInLocalStorage(data.data.accessToken)
}
