import React from 'react';
import {NextPage} from "next";
import useUser from "../../hooks/useUser";
import {useRouter} from "next/router";
import {isServer} from "../../services/utils";
import {useSession} from "next-auth/react";

const PrivateRoute = (Component: NextPage | React.FC) => {
  const Auth = () => {
    // redux store | context 등의 상태를 통해 조건부 처리를 한다
    const { data: session, status } = useSession();
    const router = useRouter();

    if (!session?.user && !isServer) {
      // Login 컴포넌트를 출력하거나
      // 이미 로그인 화면이 구현된 페이지를 사용하고 싶다면 useRouter()를 통해 라우팅
      router.push({ pathname: '/'})
    }
    // 로그인이 되어있다면
    return <Component />;
  };

  return Auth;
};

export default PrivateRoute;
