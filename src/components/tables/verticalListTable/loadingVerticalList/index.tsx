import React from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../../config/styles";
import SkeletonList from "./skeletonList";

const LoadingVerticalList = () => {
  return (
    <Container>
      <div className="title"></div>
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
    </Container>
  );
};

const Container = styled.section`
  width: 420px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  padding-bottom: 22px;
  > .title {
    height: 60px;  
  }
  ${MEDIA.TABLET} {
    width: calc(100vw - 40px);
  }
  ${MEDIA.MOBILE} {
    width: calc(100vw - 20px);
  }
`

export default LoadingVerticalList;
