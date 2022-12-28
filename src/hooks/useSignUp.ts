import {useMutation, useQueryClient} from "@tanstack/react-query";
import {signInAPI} from "../services/auth/api";
import {getUserQueryKey} from "../services/auth/types";

const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation(signInAPI, {
    onSuccess: (user) => {
      console.log(user)
      queryClient.setQueryData([getUserQueryKey], user)
    },
    onError: (error) => {
      console.log(error)
    },
  })
}

export default  useSignUp;
