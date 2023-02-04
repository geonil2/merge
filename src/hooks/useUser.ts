import {useQuery} from "@tanstack/react-query";
import {getUserQueryKey} from "../services/auth/types";
import {getUserAPI} from "../services/auth/api";
import useAuthenticated from "./useAuthenticated";
import { useEffect } from "react";

const useUser = () => {
  const isAuthenticated = useAuthenticated();

  useEffect(() => {
    console.log("header authenticate : ", isAuthenticated)
  }, [isAuthenticated])

  return useQuery([getUserQueryKey], getUserAPI, {
    enabled: isAuthenticated,
    staleTime: Infinity,
  });
}

export default useUser;
