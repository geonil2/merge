import styled from "@emotion/styled";

import { COLORS } from "../../config/styles";

export const InputField = styled.div`
  position: relative;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  background: ${COLORS.LIGHT_GRAY};
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  width: calc(100% - 15px);
  padding: 14px;
`;

export const SubmitButton = styled.button``;

export const Icon = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
