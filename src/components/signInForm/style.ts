import styled from "@emotion/styled";
import { COLORS, SHADOWS } from "../../config/styles";

export const Form = styled.form`
  width: 100%;
  padding: 24px;
  box-shadow: ${SHADOWS.BASIC};
`;

export const Logo = styled.div`
  width: 50%;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 5px;
  padding: 13px;
  margin-top: 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ErrorMsg = styled.p`
  position: absolute;
  top: calc(100% + 6px);
  font-size: 12px;
  color: ${COLORS.RED};
`;

export const SubmitBtn = styled.button`
  width: 100%;
  color: ${COLORS.WHITE};
  text-align: center;
  background-color: ${COLORS.PRIMARY};
  border-radius: 5px;
  opacity: 80%;
  transition-duration: 0.2s;
  padding: 13px;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`;

export const SignupLink = styled.div`
  text-align: end;
  font-size: 14px;
  margin-top: 20px;

  p {
    color: ${COLORS.DARK_GRAY};
  }

  a {
    display: inline-block;
    text-decoration: underline;
    margin-top: 6px;
  }
`;
