import React, { PropsWithChildren } from "react";

import * as S from "./style";

const WritingPageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Layout>
      <S.Container>{children}</S.Container>
    </S.Layout>
  );
};

export default WritingPageWrapper;
