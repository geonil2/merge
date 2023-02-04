import {googleSignInAPI} from "../services/auth/api";
import useSignIn from "./useSignIn";

const useGoogleSignIn = () => {
  const { mutate: signIn } = useSignIn(googleSignInAPI);

  const handleSignIn = () => {
    window.location.href =`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`
  }

  const googleSignIn = async (code: string) => {
    await signIn(code);
  }

  return { handleSignIn, googleSignIn }
}

export default useGoogleSignIn;
