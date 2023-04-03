import useSignIn from "./useSignIn";
import { kakaoSignInAPI } from "../services/auth/api";

const useKakaoSignIn = () => {
  const { mutate: signIn } = useSignIn(kakaoSignInAPI);

  const handleSignIn = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  const kakaoSignIn = async (code: string) => {
    await signIn(code);
  };

  return { handleSignIn, kakaoSignIn };
};

export default useKakaoSignIn;
