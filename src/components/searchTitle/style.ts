import styled from "@emotion/styled";
import { COLORS, MEDIA, SHADOWS } from "../../config/styles";

export const Container = styled.div`
  width: 100%;
  font-size: 20px;
  padding: 30px 27px;
  background-color: white;
  box-shadow: ${SHADOWS.BASIC};
`;

export const InnerText = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 120%;

  ${MEDIA.MOBILE} {
    justify-content: space-between;
    align-items: flex-start;
    font-size: 14px;
  }
`;

export const SearchKeyword = styled.div`
  color: ${COLORS.RED};

  > span {
    color: ${COLORS.BLACK};

    ${MEDIA.MOBILE} {
      display: block;
    }
  }
`;

export const Total = styled.div`
  font-size: 14px;
  color: ${COLORS.GRAY};
  margin-left: 10px;
`;
