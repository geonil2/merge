import {API} from "../../config/api";
import {postBoardRequestBody} from "./types";

export const postBoardApi = async (body: postBoardRequestBody) => {
  console.log(body, 'body')
  const response = await API.post('/api/boards', body)
  console.log(response, 'response')
  return response.data
}
