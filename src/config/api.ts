import axios, {AxiosError} from "axios";

export const API = axios.create();

API.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST

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
