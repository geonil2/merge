import {useMutation} from "@tanstack/react-query";
import {loginApi} from "../services/auth/api";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import {LoginRequestBody} from "../services/auth/types";

const useUser = () => {
  const { data: session, status } = useSession();
  const { data, mutate } = useMutation(loginApi);

  useEffect(() => {
    if (session && status === 'authenticated') {
      mutate(session as LoginRequestBody)
    }
  }, [session])

  return { data: data?.data };
};

export default useUser;
