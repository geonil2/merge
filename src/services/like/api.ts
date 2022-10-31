import {API} from "../../config/api";

export const postLikeApi = async (boardId: string) => {
  const { data } = await API.post(`/api/likes/${boardId}`)
  return data
}
