import {isAxiosError} from "./api";
import {QueryCache, QueryClient} from "@tanstack/query-core";

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
    queryCache: new QueryCache({
      onError: (error) =>
        console.log(error, 'common error')
        // signOut({ redirect: false })
    }),
  });

  queryClient.setDefaultOptions({
    queries: {
      // suspense: true,
      retry: retry
    },
  })

  return queryClient
}
