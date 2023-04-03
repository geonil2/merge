import styled from "@emotion/styled";
import { COLORS, SHADOWS } from "../../../config/styles";

export const Popup = styled.div`
  //width: 416px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  padding: 10px 30px;

  > svg {
    width: 16px;
    fill: ${COLORS.PRIMARY};
    margin-right: 10px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
`;
