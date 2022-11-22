import axios from "axios";

export const getNewsListApi = async () => {
  const { data } = await axios.get('/api/news', {
    baseURL: process.env.NEXT_PUBLIC_URL
  });
  return data.data;
}


