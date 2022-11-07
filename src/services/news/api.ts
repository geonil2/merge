import {API} from "../../config/api";

export const getNewsListApi = async () => {
  const { data } = await API.get('http://localhost:3000/api/news', {
    // baseURL: '/api'
  });
  return data.data;
}


