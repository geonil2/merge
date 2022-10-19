export const newsListQueryKey = 'getNewsList'

export interface boardList {
  id: string,
  title: string,
  description: string,
  image?: string,
  url: string,
  category?: string,
  owner?: string,
  views?: string,
  likes?: string,
  created_at: string,
  updated_at?: string,
}
