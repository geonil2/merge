import React, {PropsWithChildren} from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../config/styles";

const WritingPageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Container>
        {children}
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 1280px;
  padding: 100px 40px 20px 40px;
  margin: 0px auto;
  ${MEDIA.tablet} {
    width: 100%;
    padding: 100px 20px 10px 20px;
  }
  ${MEDIA.mobile} {
    padding: 100px 10px 10px 10px;
  }
`

const Container = styled.section`
  box-shadow: ${SHADOWS.basic};
  padding: 0px 24px;
  > p {
    font-weight: 700;
    line-height: 50px;
    border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
    margin-bottom: 14px;
  }
`

export default WritingPageWrapper;
