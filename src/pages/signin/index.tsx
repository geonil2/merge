import React from 'react';
import MainLayout from "../../components/mainLayout";
import SignInForm from "../../components/signInForm";
import styled from "@emotion/styled";
import SNSSignIn from "./snsSignIn";

const Signin = () => {
  return (
    <MainLayout hasAsideBar={false}>
      <Layout>
        <SignInWrapper>
          <SignInForm />
          <SNSSignIn text={true} />
        </SignInWrapper>
      </Layout>

    </MainLayout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //padding: 100px 0px 20px 0px
`

const SignInWrapper = styled.div`
  width: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Signin;
