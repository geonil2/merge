import {API} from "../../config/api";
import {BoardByCategoryRequestQuery, PostBoardRequestBody, putBoardRequestBody} from "./types";

export const postBoardApi = async (body: PostBoardRequestBody) => {
  const { data } = await API.post('/api/boards', body)
  return data.data
}

export const getBoardByCategoryApi = async ({ category, offset, limit }: BoardByCategoryRequestQuery) => {
  console.log(`/api/boards?category=${category}&offset=${offset}&limit=${limit}`, 'parameter!')
  const { data } = await API.get(`/api/boards`, { params: { category, offset, limit }})
  return data.data
}

export const getBoardByIdApi = async (id: string) => {
  console.log(id, 'id')
  const { data } = await API.get(`/api/boards/${id}`)
  return data.data
}

export const updateBoardByIdApi = async (boardInfo: putBoardRequestBody) => {
  const { boardId, title, description, category, email } = boardInfo
  const { data } = await API.put(`/api/boards/${boardId}`, { title, description, category, email })
  return data.data
}

export const deleteBoardByIdApi = async (id: string) => {
  console.log(id, 'id')
  const { data } = await API.delete(`/api/boards/${id}`)
  return data.data
}
