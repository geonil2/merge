import axios, {AxiosError} from "axios";
import {isServer} from "../services/utils";
import { getSession, signOut } from 'next-auth/react'

export const API = axios.create();

export const isAxiosError = (error: any): error is AxiosError => {
  return error?.isAxiosError;
}

const globalErrorHandler = async (error?: any) => {
  if (isAxiosError(error)) {
    const status = error.response?.status
    if (status) {
      if (status >= 500) {
        alert('Something went wrong')
      } else {
        if (status === 401) {
          await signOut()
        }
      }
    }
  }
}

API.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST
API.interceptors.request.use(
  async (config) => {
    const session = await getSession()
    const token = !isServer ? session?.accessToken : '';
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, undefined
);
API.interceptors.response.use(
  undefined,
  globalErrorHandler,
)


