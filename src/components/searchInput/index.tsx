import React from 'react';
import styled from "@emotion/styled";

const CommonInput = () => {
  return (
    <InputField>
      <StyledInput />
      <Icon src="/images/icons/search_icon.svg" alt="Search" />
    </InputField>
  );
};

const InputField = styled.div`
  width: 207px;
`

const StyledInput = styled.input`
  width: 100%;
`

const Icon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 12px;
  top: 12px;
`

export default CommonInput;
