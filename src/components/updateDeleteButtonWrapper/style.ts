import styled from "@emotion/styled";
import { COLORS } from "../../config/styles";

interface ActiveButtonProps {
  isActive: boolean;
}

export const ActiveButton = styled.div<ActiveButtonProps>`
  position: relative;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-self: center;
  fill: ${(props) => (props.isActive ? COLORS.PRIMARY : COLORS.GRAY)};
  cursor: pointer;
`;
