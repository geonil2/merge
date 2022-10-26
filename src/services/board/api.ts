import {API} from "../../config/api";
import {BoardByCategoryRequestQuery, PostBoardRequestBody} from "./types";

export const postBoardApi = async (body: PostBoardRequestBody) => {
  const { data } = await API.post('/api/boards', body)
  return data.data
}

const params = new URLSearchParams();

export const getBoardByCategory = async ({ category, offset, limit }: BoardByCategoryRequestQuery) => {
  console.log(`/api/boards?category=${category}&offset=${offset}&limit=${limit}`, 'parameter!')
  const { data } = await API.get(`/api/boards`, {params: {category, offset, limit}})
  return data.data
  // const url = `/api/boards?category=${category}&offset=${offset}&limit=${limit}`;
  // axios.get('https://localhost:4000/sendlist/todo', {params: {userId: userId}})
  //
  // console.log(url, 'url')
  // const { data } = await API.post(url);
  // return data.data
}

export const getBoardById = async (id: string) => {
  console.log(id, 'id')
  const { data } = await API.get(`/api/boards/${id}`)
  return data.data
}
