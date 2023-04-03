import React, { HTMLAttributes } from "react";

import * as S from "./style";

import useUser from "../../hooks/useUser";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: any;
}

const CommonButton: React.FC<Props> = ({ title, onClick, ...props }) => {
  const user = useUser();

  return (
    <S.Button
      {...props}
      onClick={onClick}
      // disabled={!session}
    >
      {title}
    </S.Button>
  );
};

export default CommonButton;
