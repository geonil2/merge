import {User} from "../auth/types";

export const BoardByCategoryQueryKey = 'getBoardListByCategory'
export const BoardByIdQueryKey = 'getBoardByIdApi'

export type Category = "question" | "info" | "community" | "recruit" | "notice"

export interface PostBoardRequestBody {
  title: string,
  description: string,
  category: Category,
  email: string
}

export interface PutBoardRequestBody extends PostBoardRequestBody {
  boardId: string
}

export interface BoardByCategoryRequestQuery {
  category: Category,
  offset?: number,
  limit?: number
}

export interface BoardList {
  _id: string,
  title: string,
  description: string,
  image?: string,
  url: string,
  category?: string,
  owner?: User,
  views?: string,
  likes?: string[],
  createdAt: string,
  updatedAt?: string,
}
