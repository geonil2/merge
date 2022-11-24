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
  box-shadow: ${SHADOWS.basic};
  padding-bottom: 22px;
  > .title {
    height: 60px;  
  }
  ${MEDIA.tablet} {
    width: calc(100vw - 40px);
  }
  ${MEDIA.mobile} {
    width: calc(100vw - 20px);
  }
`

export default LoadingVerticalList;
