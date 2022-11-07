import {User} from "../auth/types";

export const BoardByCategoryQueryKey = 'getBoardListByCategory'
export const BoardByIdQueryKey = 'getBoardById'
export const BestBoardQueryKey = 'getBestBoard'

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

interface BaseBoard {
  _id: string,
  title: string,
  description: string,
  createdAt: string,
}

export interface Board extends BaseBoard {
  category?: Category,
  owner?: User,
  comment?: number,
  likes?: string[],
  url?: string, // only news Board
  updatedAt?: string,
}

