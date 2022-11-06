import {API} from "../../config/api";
import {BoardByCategoryRequestQuery, PostBoardRequestBody, PutBoardRequestBody} from "./types";

export const postBoardApi = async (body: PostBoardRequestBody) => {
  const { data } = await API.post('/api/boards', body)
  return data.data
}

export const postBoardImageApi = async (formData: FormData) => {
  const { data } = await API.post('/api/boards/upload/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
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

export const getBestBoard = async () => {
  const { data } = await API.get(`/api/boards/all/best`)
  return data.data
}

export const updateBoardByIdApi = async (boardInfo: PutBoardRequestBody) => {
  const { boardId, title, description, category, email } = boardInfo
  const { data } = await API.put(`/api/boards/${boardId}`, { title, description, category, email })
  return data.data
}

export const deleteBoardByIdApi = async (id: string) => {
  console.log(id, 'id')
  const { data } = await API.delete(`/api/boards/${id}`)
  return data.data
}
