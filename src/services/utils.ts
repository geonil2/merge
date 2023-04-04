import { API } from "../config/api";

export const isServer = typeof window === "undefined";

export const setTokenInLocalStorage = (token: string) => {
  window.localStorage.setItem("auth-token", JSON.stringify(token));
};

export const removeTokenInLocalStorage = () => {
  window.localStorage.removeItem("auth-token");
};

export const getTokenInLocalStorage = () => {
  const token = window.localStorage.getItem("auth-token");
  return token ? JSON.parse(token) : null;
};

export const clearAuth = () => {
  delete API.defaults.headers.common["Authorization"];
  removeTokenInLocalStorage();
};
