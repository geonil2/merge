import {API} from "../../config/api";
import {updateNameInputValue} from "../../components/tables/authTable";

export const updateNameAPI = async (name: updateNameInputValue) => {
  const { data } = await API.put('/api/auth', name)
  return data.data
}
