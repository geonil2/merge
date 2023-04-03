import styled from "@emotion/styled";
import { COLORS, MEDIA, SHADOWS } from "../../config/styles";

export const Container = styled.ul`
  position: absolute;
  top: 100%;
  left: -12px;
  z-index: 100;
  width: max-content;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  border-radius: 5px;
  padding: 5px 12px;
  margin-top: 5px;
  cursor: pointer;

  > li {
    color: ${COLORS.GRAY};
    border-bottom: 1px solid ${COLORS.GRAY};
    padding: 2px 0px;

    &:hover {
      color: ${COLORS.PRIMARY};
    }

    &:last-child {
      border: none;
    }
  }

  ${MEDIA.TABLET} {
    left: auto;
    right: 12px;
  }
`;
