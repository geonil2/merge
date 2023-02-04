import useSignIn from "./useSignIn";
import {naverSignInAPI} from "../services/auth/api";

const useNaverSignIn = () => {
  const { mutate: signIn } = useSignIn(naverSignInAPI);

  const handleSignIn = () => {
    window.location.href =`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}/signin/callback/naver&state=1234`
  }

  const naverSignIn = async (code: string) => {
    await signIn(code);
  }

  return { handleSignIn, naverSignIn }
}

export default useNaverSignIn;
