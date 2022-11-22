import {API} from "../../config/api";

export const getNewsListApi = async () => {
  const { data } = await API.get('/api/news', {
    baseURL: process.env.NEXT_PUBLIC_URL
  });
  return data.data;
}


