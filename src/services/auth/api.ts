import {LoginRequestBody} from "./types";
import {api} from "../../config/api";

export const loginApi = async (body: LoginRequestBody) => {
  const response = await api.post('/auth/login', body, {
    baseURL: '/api',
  })
  return response.data
}
