import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../../config/styles";
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
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  padding-bottom: 22px;
  > .title {
    height: 60px;  
  }
`

export default LoadingVerticalList;
