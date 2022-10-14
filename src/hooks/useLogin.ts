import {useMutation} from "@tanstack/react-query";
import {loginApi} from "../services/auth/api";

const useLogin = () => {
  const mutation = useMutation(loginApi);

  return mutation;
};

export default useLogin;
