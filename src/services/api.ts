import axios from "axios";

export const getNewsListApi = async () => {
  const { data } = await axios.get('/api/news');
  return data;
}


