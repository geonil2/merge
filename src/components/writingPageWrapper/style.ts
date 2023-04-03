import styled from "@emotion/styled";
import { COLORS, MEDIA, SHADOWS } from "../../config/styles";

export const Layout = styled.div`
  width: 1280px;
  padding: 100px 40px 20px 40px;
  margin: 0px auto;

  ${MEDIA.TABLET} {
    width: 100%;
    padding: 100px 20px 10px 20px;
  }

  ${MEDIA.MOBILE} {
    padding: 100px 10px 10px 10px;
  }
`;

export const Container = styled.section`
  box-shadow: ${SHADOWS.BASIC};
  padding: 0px 24px;

  > p {
    font-weight: 700;
    line-height: 50px;
    border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
    margin-bottom: 14px;
  }
`;
