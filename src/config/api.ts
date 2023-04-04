import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { clearAuth, getTokenInLocalStorage, isServer } from "../services/utils";
import { refreshTokenAPI } from "../services/auth/api";

export const API = axios.create();

export const isAxiosError = (error: any): error is AxiosError => {
  return error?.isAxiosError;
};

const globalErrorHandler = async (error?: any) => {
  if (!isServer && isAxiosError(error)) {
    const status = error.response?.status;
    if (status) {
      if (status >= 500) {
        alert("서버에 문제가 발생했습니다. 빠른 정상화를 위해 노력하겠습니다.");
      } else {
        if (status === 401) {
          if (error.config?.url == "/api/auth/refresh") {
            clearAuth();
          } else {
            const originalRequest = error.config as AxiosRequestConfig;
            try {
              await refreshTokenAPI();
              return axios(originalRequest);
            } catch (error) {
              clearAuth();
            }
          }
        }
      }
      console.log(error.response?.data, "global Error handle");
    }
  }
};

API.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;
API.interceptors.request.use(async (config) => {
  const accessToken = isServer ? "" : getTokenInLocalStorage();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, undefined);
API.interceptors.response.use(undefined, globalErrorHandler);
