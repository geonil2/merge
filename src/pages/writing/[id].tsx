import React from 'react';
import BoardForm, {UpdateBoardInfo} from "../../components/boardForm";
import WritingPageWrapper from "../../components/writingPageWrapper";
import {useRouter} from "next/router";
import HeadMeta from "../../components/headMeta";

const UpdateBoardPage = () => {
  const { query } = useRouter();

  return (
    <>
      <HeadMeta
        title={query.title as string}
        description={query.title as string}
      />
      <WritingPageWrapper>
        <p>수정하기</p>
        <BoardForm type='update' board={query as UpdateBoardInfo} />
      </WritingPageWrapper>
    </>
  );
};

export default UpdateBoardPage;

