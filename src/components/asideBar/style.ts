import styled from "@emotion/styled";
import { MEDIA } from "../../config/styles";

export const Aside = styled.aside`
  position: sticky;
  bottom: 0;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: max-content;
  gap: 14px 0px;

  ${MEDIA.TABLET} {
    position: inherit;
    width: 100%;
    order: 2;
    grid-template-columns: auto 320px;
    gap: 14px 14px;
  }

  ${MEDIA.MOBILE} {
    order: 2;
    grid-template-columns: repeat(1, 1fr);
  }
`;
