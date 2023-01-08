import {User} from "../auth/types";

export const CommentByBoardIdQueryKey = 'getCommentByBoardId'

export interface Comment {
  _id: string,
  owner: User,
  // board: string,
  contents: string,
  createdAt: string,
  updatedAt: string,
}

export interface CommentResponseData {
  data: Comment[]
}
