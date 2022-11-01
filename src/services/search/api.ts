import {API} from "../../config/api";

export const getSearchApi = async (keyword: string | string[] | undefined, offset: number, limit: number) => {
  const { data } = await API.get(`/api/search`, { params: { p: keyword, offset, limit }})
  return data.data
}
