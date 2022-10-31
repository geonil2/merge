import React, {useEffect} from 'react';
import BoardForm, {UpdateBoardInfo} from "../../components/boardForm";
import WritingPageWrapper from "../../components/writingPageWrapper";
import {useRouter} from "next/router";

const UpdateBoardPage = () => {
  const { query } = useRouter();

  useEffect(() => {
    console.log(query, '123123')
  }, [query])

  return (
    <WritingPageWrapper>
      <p>수정하기</p>
      <BoardForm type='update' board={query as UpdateBoardInfo} />
    </WritingPageWrapper>
  );
};

export default UpdateBoardPage;

