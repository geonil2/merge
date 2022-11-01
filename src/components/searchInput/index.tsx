import React from 'react';
import styled from "@emotion/styled";
import {COLORS} from "../../config/styles";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {useSetRecoilState} from "recoil";
import {SubmitHandler, useForm, UseFormReturn} from "react-hook-form";
import {CommentTextareaValue} from "../boardDetail/commentWrite";

interface Prop {
  register: UseFormReturn['register'];
}

const SearchInput: React.FC<Prop> = ({ register }) => {

  return (
    <InputField>
      <StyledInput {...register('keyword')} />
      <SubmitButton>
        <Icon src="/images/icons/search_icon.svg" alt="Search" />
      </SubmitButton>
    </InputField>
  );
};

const InputField = styled.div`
  position: relative;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  background: ${COLORS.LIGHT_GRAY};
  border-radius: 4px;
`

const StyledInput = styled.input`
  width: calc(100% - 15px);
  padding: 14px;
`

const SubmitButton = styled.button`
`

const Icon = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 14px;
  right: 14px;
  cursor: pointer;
`

export default SearchInput;
