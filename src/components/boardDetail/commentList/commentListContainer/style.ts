import styled from "@emotion/styled";

import { COLORS, MEDIA, SHADOWS } from "../../../../config/styles";

export const Container = styled.div`
  box-shadow: ${SHADOWS.BASIC};
  padding: 0px 24px;

  > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid ${COLORS.GRAY};
  }

  ${MEDIA.MOBILE} {
    padding: 0px 12px;
  }
`;
