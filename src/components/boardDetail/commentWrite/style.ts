import styled from "@emotion/styled";
import { COLORS, MEDIA, SHADOWS } from "../../../config/styles";
import CommonButton from "../../commonButton";

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

export const CommentWriteHeader = styled.div`
  margin-top: 20px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

export const CommentWriteBody = styled.form`
  margin-top: 20px;

  > textarea {
    width: 100%;
    max-width: 100%;
    border: none;
    resize: none;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 24px;
  margin-top: 20px;
  ${MEDIA.MOBILE} {
    padding-bottom: 12px;
  }
`;

export const Button = styled(CommonButton)`
  width: 110px;
  ${MEDIA.MOBILE} {
    width: 80px;
  }
`;
