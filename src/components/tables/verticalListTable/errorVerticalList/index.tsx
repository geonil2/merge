import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../../config/styles";
import {useQuery} from "@tanstack/react-query";
import {newsListQueryKey} from "../../../../services/news/types";
import {getNewsListApi} from "../../../../services/news/api";

const ErrorVerticalList: React.FC = () => {
  const { refetch } = useQuery([newsListQueryKey], () => getNewsListApi(), {
    suspense: true,
    staleTime: Infinity,
  });

  return (
    <ErrorElement>
      <p onClick={() => refetch({ throwOnError: true})}>다시 시도하기</p>
    </ErrorElement>
  );
};


const ErrorElement = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  
  p {
    text-decoration: underline;
    cursor: pointer;
  }
`


export default ErrorVerticalList;
