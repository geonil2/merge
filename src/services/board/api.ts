import {API} from "../../config/api";
import {BoardByCategoryRequestQuery, PostBoardRequestBody} from "./types";

export const postBoardApi = async (body: PostBoardRequestBody) => {
  const { data } = await API.post('/api/boards', body)
  return data.data
}

export const getBoardByCategory = async ({ category, offset, limit }: BoardByCategoryRequestQuery) => {
  console.log(`/api/boards?category=${category}&offset=${offset}&limit=${limit}`, 'parameter!')
  const { data } = await API.get(`/api/boards?category=${category}&offset=${offset}&limit=${limit}`)
  return data.data
}
export const getBoardById = async (id: string) => {
  console.log(id, 'id')
  const { data } = await API.get(`/api/boards/${id}`)
  return data.data
}
