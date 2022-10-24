import {API} from "../../config/api";
import {BoardByCategoryRequestQuery, PostBoardRequestBody} from "./types";

export const postBoardApi = async (body: PostBoardRequestBody) => {
  const response = await API.post('/api/boards', body)
  return response.data
}

export const getBoardByCategory = async ({ category, offset, limit }: BoardByCategoryRequestQuery) => {
  console.log(category, offset, limit, 'parameter!')
  const response = await API.get(`/api/boards?category=${category}&offset=${offset}&limit=${limit}`)
  return response.data
}

export const getBoardById = async (id: string) => {
  console.log(id, 'id')
  const response = await API.get(`/api/boards/${id}`)
  return response.data
}
