import {User} from "../auth/types";

export const BoardByCategoryQueryKey = 'getBoardListByCategory'
export const BoardByIdQueryKey = 'getBoardByIdApi'
export const BestBoardQueryKey = 'getBestBoardApi'

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

interface BaseModel {
  _id: string,
  title: string,
  description: string,
  createdAt: string,
}

export interface Board extends BaseModel {
  category: string,
  owner: User,
  likes: string[],
  updatedAt: string,
}

export interface newsBoard extends BaseModel {
  url: string
}


