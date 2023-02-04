import {useMutation, useQueryClient} from "@tanstack/react-query";
import {authenticateQueryKey, getUserQueryKey, SignInRequestBody, User} from "../services/auth/types";
import {useRouter} from "next/router";

const useSignIn = (api: (parameter: any) => Promise<any>) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<User, Error, SignInRequestBody | string>(api, {
    onSuccess: (user) => {
      queryClient.setQueryData([authenticateQueryKey], true);
      queryClient.invalidateQueries([getUserQueryKey]);
      router.push("/");
    }
  })
}

export default useSignIn;
