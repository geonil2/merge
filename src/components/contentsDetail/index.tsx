import React from 'react';
import Contents from "./contents";
import CommentWrite from "./commentWrite";
import CommentList from "./commentList";

const ContentsDetail = () => {
  return (
    <>
      <Contents />
      <CommentWrite />
      <CommentList />
    </>
  );
};

export default ContentsDetail;
