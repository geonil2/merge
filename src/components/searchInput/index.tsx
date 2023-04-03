import React from "react";
import { UseFormReturn } from "react-hook-form";

import * as S from "./style";

interface Prop {
  register: UseFormReturn["register"];
}

const SearchInput: React.FC<Prop> = ({ register }) => {
  return (
    <S.InputField>
      <S.StyledInput {...register("keyword")} placeholder="검색" />
      <S.SubmitButton>
        <S.Icon src="/images/icons/search_icon.svg" alt="Search" />
      </S.SubmitButton>
    </S.InputField>
  );
};

export default SearchInput;
