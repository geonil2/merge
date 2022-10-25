import {API} from "../../config/api";

export const postCommentApi = async ({ boardId, contents, userId }: { boardId: string, contents: string, userId: string }) => {
  const { data } = await API.post(`/api/comments/${boardId}`, { contents, userId })
  return data.data
}

export const getCommentByBoardId = async (boardId: string) => {
  const { data } = await API.get(`/api/comments/${boardId}`)
  return data.data
}
