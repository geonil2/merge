import axios, {AxiosError} from "axios";
import {isServer} from "../services/utils";

export const API = axios.create();

const getToken = !isServer ? localStorage.getItem('accessToken') : ''
// const accessToken = getToken ? JSON.parse(getToken) : '';

API.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST
API.defaults.headers.common['Authorization'] = `Bearer ${getToken}`

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
        if (status === 403) {

        }
      }
    }

  }
}
