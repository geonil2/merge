import styled from "@emotion/styled";

import { COLORS, MEDIA } from "../../../config/styles";

import CommonButton from "../../commonButton";

export const CommentWrap = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding: 20px 24px;

  ${MEDIA.MOBILE} {
    padding: 10px 12px;
  }
`;

export const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentInfoWrap = styled.div`
  width: 100%;
  margin-left: 20px;
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentInfoLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin-right: 10px;
`;

interface ActiveButtonProps {
  isActive: boolean;
}

export const ActiveButton = styled.div<ActiveButtonProps>`
  position: relative;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-self: center;
  fill: ${(props) => (props.isActive ? COLORS.PRIMARY : COLORS.GRAY)};
  cursor: pointer;
`;

export const Commentarea = styled.div`
  width: 100%;
  > textarea {
    width: 100%;
    border: none;
    margin-top: 10px;
    resize: none;
  }
`;

export const UpdateButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled(CommonButton)`
  height: 30px;
  background-color: ${COLORS.LIGHT_GRAY};
  border: 1px solid ${COLORS.LIGHT_GRAY};
  color: ${COLORS.BLACK};
  padding: 0px 10px;
  box-sizing: border-box;
  &:hover {
    background-color: ${COLORS.WHITE};
  }
`;

export const UpdateButton = styled(CommonButton)`
  height: 30px;
  padding: 0px 10px;
`;
