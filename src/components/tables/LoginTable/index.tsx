import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";

const LoginTable = () => {
  return (
    <Container>
      <LoginButton>
        <GoogleLogo src="/images/icons/google.svg" />
      </LoginButton>
    </Container>
  );
};

const Container = styled.section`
  box-shadow: ${SHADOWS.basic};
  padding: 24px;
`

const LoginButton = styled.button`
  width: 100%;
  height: 42px;
  border: 1px solid ${COLORS.GRAY};
`

const GoogleLogo = styled.img`
`

export default LoginTable;
