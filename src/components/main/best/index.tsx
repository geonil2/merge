import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getBestBoard } from '../../../services/board/api';
import { BestBoardQueryKey } from '../../../services/board/types';
import TwoRowTable from '../../tables/twoRowTable';

const Best = () => {
  const { data: bestBoard } = useQuery([BestBoardQueryKey], getBestBoard);

  return (
    <>
      {!!bestBoard && <TwoRowTable list={bestBoard} />}
    </>
  );
};

export default Best;