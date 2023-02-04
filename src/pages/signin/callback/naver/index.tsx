import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import useNaverSignIn from "../../../../hooks/useNaverSignIn";

const Naver = () => {
  const router = useRouter();
  const { naverSignIn } = useNaverSignIn();

  useEffect(() => {
    if (router.query.code && typeof router.query.code === 'string'){
      console.log(router.query.code, 'router.query.code')
      naverSignIn(router.query.code);
    }
  }, [router])

  return (
    <div>

    </div>
  );
};

export default Naver;
