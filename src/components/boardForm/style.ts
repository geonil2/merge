import styled from "@emotion/styled";
import { COLORS } from "../../config/styles";
import CommonButton from "../commonButton";

export const Category = styled.div`
  position: relative;
  width: 207px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${(props: { category: string }) =>
    props.category === "Category" ? COLORS.GRAY : COLORS.BLACK};
  border: 1px solid ${COLORS.GRAY};
  border-radius: 4px;
  padding: 13px 14px;
  cursor: pointer;

  > ul {
    position: absolute;
    z-index: 9999;
    top: 100%;
    left: 0%;
    width: 100%;
    border: 1px solid ${COLORS.GRAY};
    background-color: ${COLORS.WHITE};

    > li {
      width: 100%;
      line-height: 20px;
      padding: 13px 14px;

      :hover {
        color: ${COLORS.BLACK};
      }
    }
  }
`;

export const SelectedLi = styled.p``;

export const ArrowImg = styled.img`
  width: 14px;
  height: 14px;
`;

export const Title = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 4px;
  padding: 13px 14px;
  margin-top: 14px;

  &::placeholder {
    color: ${COLORS.GRAY};
  }
`;

export const TextEditorWrap = styled.div`
  margin-top: 14px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 22px;
  margin-top: 40px;
`;

export const Button = styled(CommonButton)`
  width: 180px;
`;
