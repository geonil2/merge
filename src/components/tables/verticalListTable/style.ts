import styled from "@emotion/styled";

import { COLORS, MEDIA, SHADOWS } from "../../../config/styles";

export const Container = styled.section`
  width: 766px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  padding-bottom: 22px;

  &.newsList {
    width: 420px;
  }

  ${MEDIA.TABLET} {
    width: calc(100vw - 40px);

    &.newsList {
      width: calc(100vw - 40px);
      grid-column-start: 1;
      grid-column-end: 3;
    }

    ${MEDIA.MOBILE} {
      width: calc(100vw - 20px);

      &.newsList {
        width: calc(100vw - 20px);
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }
`;

export const ListLayout = styled.div`
  height: 70px;
  border-bottom: 1px solid ${COLORS.GRAY};
  margin: 0px 24px;

  &:last-of-type {
    border: none;
  }
  ${MEDIA.MOBILE} {
    margin: 0px 10px;
  }
`;
