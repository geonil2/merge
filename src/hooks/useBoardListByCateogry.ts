import React from "react";
import {
  BoardByCategoryQueryKey,
  BoardByCategoryRequestQuery,
} from "../services/board/types";
import { useQuery } from "@tanstack/react-query";
import { getBoardByCategoryApi } from "../services/board/api";

const useBoardByCategory = ({
  category,
  offset = 0,
  limit = 5,
}: BoardByCategoryRequestQuery) => {
  const { data } = useQuery(
    [BoardByCategoryQueryKey, { category, offset, limit }],
    () =>
      getBoardByCategoryApi({
        category,
        offset,
        limit,
      }),
    {
      staleTime: Infinity,
    }
  );

  return { data };
};

export default useBoardByCategory;
