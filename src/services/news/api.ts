import {API} from "../../config/api";

export const getNewsListApi = async () => {
  const { data } = await API.get('/api/news', {
    // baseURL: '/api'
  });
  return data.data;
}


