import {useQuery} from "@tanstack/react-query";
import {getUserQueryKey} from "../services/auth/types";
import {getUserAPI} from "../services/auth/api";
import useAuthenticated from "./useAuthenticated";

const useUser = () => {
  const isAuthenticated = useAuthenticated();

  return useQuery([getUserQueryKey], () => getUserAPI(), {
    enabled: isAuthenticated,
    staleTime: Infinity,
  });
}

export default useUser;
