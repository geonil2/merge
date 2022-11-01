import React from 'react';
import BoardForm from "../../components/boardForm";
import WritingPageWrapper from "../../components/writingPageWrapper";
import PrivateRoute from "../../components/PrivateRoute";

const Writing = () => {
  return (
    <WritingPageWrapper>
      <p>글쓰기</p>
      <BoardForm type='create' />
    </WritingPageWrapper>
  );
};

export default PrivateRoute(Writing);
