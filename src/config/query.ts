import {isAxiosError} from "./api";
import {QueryCache, QueryClient} from "@tanstack/query-core";
import {getUserAPI, signOutAPI} from "../services/auth/api";
import {getUserQueryKey, signOutQueryKey} from "../services/auth/types";

const retry = (failCount: number, error: unknown): boolean => {
    if (isAxiosError(error)) {
        const status = error.response?.status;
        return failCount < 3 && !!status && status >= 500
    } else {
        return failCount < 3
    }
}

/*
* QueryClient default setting
 */
export const generateQueryClient = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache(),
  });

  queryClient.setDefaultOptions({
    queries: {
      retry: retry
    },
  })
  queryClient.setQueryDefaults([getUserQueryKey], {
    staleTime: Infinity,
    queryFn: getUserAPI,
  })
  queryClient.setMutationDefaults([signOutQueryKey], {
    mutationFn: signOutAPI,
    onSettled: () => {
      queryClient.resetQueries()
    },
  })
  return queryClient
}
