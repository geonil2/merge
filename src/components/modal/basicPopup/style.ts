import styled from "@emotion/styled";
import { COLORS, SHADOWS } from "../../../config/styles";

export const Popup = styled.div`
  width: 416px;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  border-radius: 5px;
  padding: 30px;
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const Descriptions = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.div`
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;

  &:first-of-type {
    margin-right: 10px;
  }
`;
