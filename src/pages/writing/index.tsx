import React from 'react';
import BoardForm from "../../components/boardForm";
import WritingPageWrapper from "../../components/writingPageWrapper";

const Writing = () => {
  return (
    <WritingPageWrapper>
      <p>글쓰기</p>
      <BoardForm type='create' />
    </WritingPageWrapper>
  );
};

export default Writing;
