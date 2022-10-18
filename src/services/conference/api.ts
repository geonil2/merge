import axios from "axios";
import {api} from "../../config/api";

export const getConferenceListApi = async () => {
  const { data } = await api.get('/api/conference', {
    baseURL: 'http://localhost:3000'
  });
  return data;
}
