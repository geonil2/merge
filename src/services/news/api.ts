import axios from "axios";
import {api} from "../../config/api";

export const getNewsListApi = async () => {
  const { data } = await api.get('/api/news', {
    baseURL: 'http://localhost:3000'
  });
  return data;
}


