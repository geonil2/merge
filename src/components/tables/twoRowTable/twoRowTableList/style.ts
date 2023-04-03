import styled from "@emotion/styled";
import { COLORS, MEDIA } from "../../../../config/styles";

export const ATagWrap = styled.a`
  height: 60px;
  cursor: pointer;
  border-bottom: 1px solid ${COLORS.GRAY};
  &:nth-of-type(odd) {
    border-right: 1px solid ${COLORS.GRAY};
  }
`;

export const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 24px;

  ${MEDIA.MOBILE} {
    padding: 10px 10px;
  }
`;

export const ListIndex = styled.span`
  width: 42px;
  font-weight: 700;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  margin: 10px 10px 10px 0px;

  > p {
    max-width: 185px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 6px;
  }

  > span {
    margin-right: 6px;
  }

  > img {
    width: 20px;
    height: 20px;
  }
`;

export const PopularImage = styled.img`
  width: 20px;
  height: 20px;
`;
