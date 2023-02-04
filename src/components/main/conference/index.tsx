import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getConferenceListApi } from '../../../services/conference/api';
import { ConferenceListQueryKey } from '../../../services/conference/types';
import BigImageTable from '../../tables/bigImageTable';

const Conference = () => {
  const { data: conference } = useQuery([ConferenceListQueryKey], getConferenceListApi, {
    staleTime: Infinity,
  });

  return (
    <>
      {!!conference && <BigImageTable list={conference} />}
    </>
  );
};

export default Conference;