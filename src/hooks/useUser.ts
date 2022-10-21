import {useMutation} from "@tanstack/react-query";
import {loginApi, removeTokenInStorage, setTokenInStorage} from "../services/auth/api";
import {signOut, useSession} from "next-auth/react";
import {useEffect} from "react";
import {nextAuthLoginResponseData} from "../services/auth/types";
import {redirect} from "next/dist/server/api-utils";

const useUser = () => {
  const { data: session, status } = useSession();
  const { data, mutate, reset } = useMutation(loginApi);

  useEffect(() => {
    console.log(session, 'new Session data!!!!!!!!!!')
    if (session && status === 'authenticated') {
      mutate(session as nextAuthLoginResponseData, {
        onSuccess: (data) => {
          setTokenInStorage(session.accessToken)
        },
        onError: () => {
          signOut({ redirect: false });
          removeTokenInStorage()
        }
      })
    } else {
      console.log('user Data reset!!')
      // signOut({ redirect: false });
      // removeTokenInStorage()
      reset()
    }
  }, [session])

  return { user: data?.data };
};

export default useUser;
