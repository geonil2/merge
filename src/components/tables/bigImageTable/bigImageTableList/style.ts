import styled from "@emotion/styled";

import { COLORS, MEDIA } from "../../../../config/styles";

export const A = styled.a`
  width: 32%;
  display: block;

  ${MEDIA.MOBILE} {
    width: 48%;

    &:nth-of-type(3) {
      margin-top: 20px;
    }
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 5 / 3;

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

export const Tag = styled.div`
  display: flex;

  > p {
    display: flex;
    flex-shrink: 1;
    align-items: center;
    min-width: 0px;
    font-size: 12px;
    line-height: 20px;
    color: ${COLORS.WHITE};
    background: ${COLORS.PRIMARY};
    border-radius: 3px;
    padding-left: 6px;
    padding-right: 6px;
    margin: 6px 6px 0px 0px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Date = styled.div`
  font-size: 14px;
  color: ${COLORS.GRAY};
  margin-top: 5px;
`;
