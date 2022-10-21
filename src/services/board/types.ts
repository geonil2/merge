export const BoardByCategoryQueryKey = 'getBoardListByCategory'

type Category = "question" | "info" | "community" | "recruit" | "notice"

export interface PostBoardRequestBody {
  title: string,
  description: string,
  category: Category,
  email: string
}

export interface BoardByCategoryRequestQuery {
  category: Category,
  offset?: number,
  limit?: number
}

export interface boardList {
  _id: string,
  title: string,
  description: string,
  image?: string,
  url: string,
  category?: string,
  owner?: Owner,
  views?: string,
  likes?: string,
  createdAt: string,
  updatedAt?: string,
}
type Owner = {
  _id: string,
  email: string
}
