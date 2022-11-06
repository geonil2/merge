import {API} from "../../config/api";

export const getNewsListApi = async () => {
  const { data } = await API.get('/news', {
    baseURL: '/api'
  });
  return data.data;
}


