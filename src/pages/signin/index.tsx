import React from 'react';
import MainLayout from "../../components/mainLayout";
import SigninForm from "../../components/signinForm";
import styled from "@emotion/styled";
import SNSSignin from "./snsSignin";

const Signin = () => {
  return (
    <MainLayout hasAsideBar={false}>
      <Layout>
          <SigninWrapper>
          <SigninForm />
          <SNSSignin text={true} />
        </SigninWrapper>
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

const SigninWrapper = styled.div`
  width: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Signin;
