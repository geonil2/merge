import styled from "@emotion/styled";
import { COLORS } from "../../config/styles";

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;

  .pagination {
    display: flex;
    justify-content: center;

    li {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      cursor: pointer;
      margin: 0px 5px;

      &.selected {
        color: ${COLORS.PRIMARY};
        border: 1px solid ${COLORS.PRIMARY};
        border-radius: 4px;
      }
    }
  }

  .break {
    color: ${COLORS.DARK_GRAY};
  }

  .previous a svg,
  .next a svg {
    fill: ${COLORS.BLACK};
  }

  .disabledArrow svg {
    fill: ${COLORS.DARK_GRAY} !important;
  }
`;
