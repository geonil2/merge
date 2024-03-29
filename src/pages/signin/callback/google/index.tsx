import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useGoogleSignIn from "../../../../hooks/useGoogleSignIn";

const Google = () => {
  const router = useRouter();
  const { googleSignIn } = useGoogleSignIn();

  useEffect(() => {
    if (router.query.code && typeof router.query.code === "string") {
      googleSignIn(router.query.code);
    }
  }, [router]);

  return <div></div>;
};

export default Google;
