import styled from "@emotion/styled";

import { COLORS, MEDIA, SHADOWS } from "../../../config/styles";

export const SliderContainer = styled.section`
  width: 766px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.WHITE};
  padding: 0px 24px;
  box-shadow: ${SHADOWS.BASIC};

  ${MEDIA.TABLET} {
    width: calc(100vw - 40px);
  }

  ${MEDIA.MOBILE} {
    width: calc(100vw - 20px);
    padding: 0px 10px;
  }

  > p {
    font-weight: 800;
    color: ${COLORS.PRIMARY};
    word-break: keep-all;
  }

  .slider {
    font-weight: 700;
    font-size: 14px;
    padding: 22px 24px;
  }
`;
