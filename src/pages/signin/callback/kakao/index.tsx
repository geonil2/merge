import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import useKakaoSignIn from "../../../../hooks/useKakaoSignIn";

const Kakao = () => {
  const router = useRouter();
  const { kakaoSignIn } = useKakaoSignIn();

  useEffect(() => {
    console.log(router, 'router~!!!!!')
    console.log(location.search.split('=')[1], '!!')
    kakaoSignIn(location.search.split('=')[1]);
  }, [])

  return (
    <div>
      
    </div>
  );
};

export default Kakao;
