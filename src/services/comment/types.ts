import {User} from "../auth/types";

export const CommentByBoardIdQueryKey = 'getCommentByBoardIdApi'

export interface Comment {
  _id: string,
  user: User,
  board: string,
  contents: string,
  createdAt: string,
  updatedAt: string,
}
