import {API} from "../../config/api";

export const postCommentApi = async ({ boardId, contents, userId }: { boardId: string, contents: string, userId: string }) => {
  const response = await API.post(`/api/comments/${boardId}`, { contents, userId })
  return response.data
}

export const getCommentByBoardId = async (boardId: string) => {
  const response = await API.get(`/api/comments/${boardId}`)
  return response.data
}
