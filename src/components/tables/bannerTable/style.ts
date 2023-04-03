import styled from "@emotion/styled";

import { MEDIA } from "../../../config/styles";

export const Container = styled.section`
  width: 420px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${MEDIA.TABLET} {
    display: none;
  }

  .slick-slider {
    width: 100%;
    max-height: 223px;
    overflow: hidden;

    img {
      width: 420px !important;
      height: 223px;
    }

    ${MEDIA.TABLET} {
      display: none;
    }
  }
`;
