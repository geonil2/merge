import styled from "@emotion/styled";
import { COLORS, MEDIA, SHADOWS } from "../../../config/styles";

export const Container = styled.section`
  width: 766px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};

  ${MEDIA.TABLET} {
    width: calc(100vw - 40px);
  }

  ${MEDIA.MOBILE} {
    width: calc(100vw - 20px);
  }
`;

export const TwoRowTableBody = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(2, 1fr);

  ${MEDIA.MOBILE} {
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;
