import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {SubmitHandler, useForm} from "react-hook-form";
import SearchInput from "../../searchInput";

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
  }

  useEffect(() => {
    reset();
  }, [router])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SearchInput register={register} />
    </form>
  );
};

export default HeaderSearchForm;
