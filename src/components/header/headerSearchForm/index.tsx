import React, {useCallback, useEffect} from 'react';
import SearchInput from "../../searchInput";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRecoilState} from "recoil";
import {debounce} from "lodash";
import {useRouter} from "next/router";

export type SearchKeywordValue = {
  keyword?: string
}

const HeaderSearchForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<SearchKeywordValue> = (data, event) => {
    event?.preventDefault();
    if (data.keyword) {
      router.push({ pathname: `/search`, query: { p: data.keyword }})
      reset()
    }
    // onChangeKeyword(data.keyword)
  }

  // const onChangeKeyword = useCallback(debounce((keyword: string = '') => {
  //   setSearchKeyword(keyword)
  //   router.push({ pathname: `/search`, query: { p: keyword }})
  // }, 500), [SearchKeyword]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SearchInput register={register} />
    </form>
  );
};

export default HeaderSearchForm;
