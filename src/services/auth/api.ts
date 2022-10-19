import {LoginRequestBody} from "./types";
import {API} from "../../config/api";

export const loginApi = async (body: LoginRequestBody) => {
  const response = await API.post('/api/auth/login', body, {
  })
  return response.data
}
