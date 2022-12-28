import {useQuery} from "@tanstack/react-query";
import {authenticateQueryKey} from "../services/auth/types";

const useAuthenticated = () => {
  const authenticated = useQuery<boolean>([authenticateQueryKey]);

  return !!authenticated.data;
};

export default useAuthenticated
