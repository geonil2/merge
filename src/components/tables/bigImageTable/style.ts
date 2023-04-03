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

export const BigImageTableBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 24px;
  padding-bottom: 24px;

  ${MEDIA.MOBILE} {
    flex-wrap: wrap;
    margin: 0px 10px;
  }
`;
