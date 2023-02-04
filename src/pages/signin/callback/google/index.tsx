import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import useGoogleSignIn from "../../../../hooks/useGoogleSignIn";

const Google = () => {
  const router = useRouter();
  const { googleSignIn } = useGoogleSignIn();

  useEffect(() => {
    if (router.query.code && typeof router.query.code === 'string'){
      console.log(router.query.code, 'router.query.code')
      googleSignIn(router.query.code);
    }
  }, [router])

  return (
    <div>

    </div>
  );
};

export default Google;


// async naverSignIn(code:string, state:string){
//
//   const clientID = this.configService.get<string>('auth.naver.clientID');
//   const clientSecret =  this.configService.get<string>('auth.naver.clientSecret');
//   const callbackURL = this.configService.get<string>('auth.naver.callbackURL');
//
//   // 1. 로그인 API를 사용해 access token을 발급받는다.
//   const naver_api_url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&response_type=code&client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${callbackURL}&code=${code}&state=${state}`;
//
//   const naver_data = await axios.get(naver_api_url, {
//     headers: {
//       'X-Naver-Client-Id': clientID ,
//       'X-Naver-Client-Secret': clientSecret
//     }
//   })
//
//   const accessToken = naver_data.data.access_token
//
//   // 2. 발급 받은 accessToken을 사용해 회원 정보 조회 API를 사용한다.
//   const naver_open_api_url = 'https://openapi.naver.com/v1/nid/me'
//
//   const info_result = await axios.get(naver_open_api_url, {
//     headers: {'Authorization': 'Bearer ' + accessToken}
//   });
//
//   const { email, mobile, nickname } = info_result.data.response;
//
//   console.log({email, mobile, nickname})
//   return await this.signNaver(email, nickname, mobile);
//
// }
