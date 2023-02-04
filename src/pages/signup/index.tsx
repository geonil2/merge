import React from 'react';
import MainLayout from "../../components/mainLayout";

import styled from "@emotion/styled";
import SignupForm from "../../components/signUpForm";

const Signup = () => {
  return (
    <MainLayout hasAsideBar={false}>
      <Layout>
        <SigninWrapper>
          <SignupForm />
        </SigninWrapper>
      </Layout>

    </MainLayout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`

const SigninWrapper = styled.div`
  width: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Signup;
