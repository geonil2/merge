import {API} from "../config/api";

export const isServer = typeof window === 'undefined'

export const setTokenInLocalStorage = (token: string) => {
  window.localStorage.setItem("auth-token", JSON.stringify(token));
}

export const removeTokenInLocalStorage = () => {
  window.localStorage.removeItem("auth-token");
}

export const getTokenInLocalStorage = () => {
  const token = window.localStorage.getItem("auth-token");
  return token ? JSON.parse(token) : null
}

export const clearAuth = () => {
  delete API.defaults.headers.common['Authorization'];
  removeTokenInLocalStorage();
}

// 처음 사이트에 왔어
// 로컬스토리지에서 오스 토큰 찾아
// 있으면
// authentication 상태를 변경시켜
// authentication 상태가 변경되면 user api 호출
// 성공하면 아직 로그인 가능한 토큰임
// 401 오면
// 리프레시 가능한지 확인 후 비로그인

// 없으면
// 비 로그인 상태
