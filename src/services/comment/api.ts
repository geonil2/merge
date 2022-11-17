import {API} from "../../config/api";

export const postCommentApi = async ({ boardId, contents, userId }: { boardId: string, contents: string, userId: string }) => {
  const { data } = await API.post(`/api/comments/${boardId}`, { contents, userId })
  return data.data
}

export const getCommentByBoardIdApi = async (boardId: string) => {
  const { data } = await API.get(`/api/comments/${boardId}`)
  return data.data
}

export const updateCommentApi = async ({ boardId, commentId, contents} : { boardId: string, commentId: string, contents: string }) => {
  const { data } = await API.put(`/api/comments/${boardId}/${commentId}`, { contents })
  return data.data
}

export const deleteCommentApi = async ({ boardId, commentId } : { boardId: string, commentId: string }) => {
  const { data } = await API.delete(`/api/comments/${boardId}/${commentId}`)
  return data.data
}
