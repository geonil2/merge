import React, {HTMLAttributes} from 'react';
import styled from "@emotion/styled";
import {COLORS} from "../../config/styles";
import {useSession} from "next-auth/react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string,
  onClick?: any,
}

const CommonButton: React.FC<Props> = ({
  title,
  onClick,
  ...props
}) => {
  const { data: session } = useSession();

  return (
    <Button
      {...props}
      onClick={onClick}
      // disabled={!session}
    >{title}</Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  border-radius: 4px;
  padding: 0px 20px;
  margin-right: 10px;
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.SUB};
  }
`

export default CommonButton;
