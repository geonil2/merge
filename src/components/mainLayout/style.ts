import styled from "@emotion/styled";
import { MEDIA } from "../../config/styles";

export const Layout = styled.div`
  width: 1280px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  align-items: flex-end;
  padding: 100px 40px 20px 40px;
  margin: 0px auto;

  ${MEDIA.TABLET} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    padding: 100px 20px 10px 20px;
  }

  ${MEDIA.MOBILE} {
    padding: 100px 10px 10px 10px;
  }
`;
