import type {NextPage, GetServerSidePropsContext} from 'next'
import {useQuery} from "@tanstack/react-query";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import useBoardByCategory from "../hooks/useBoardListByCateogry";
import {getConferenceListApi} from "../services/conference/api";
import {ConferenceListQueryKey} from "../services/conference/types";
import {BestBoardQueryKey, BoardByCategoryQueryKey} from "../services/board/types";
import {getBestBoard, getBoardByCategoryApi} from "../services/board/api";
import VerticalSlideTable from "../components/tables/verticalSlideTable";
import TwoRowTable from "../components/tables/twoRowTable";
import VerticalListTable from "../components/tables/verticalListTable";
import BigImageTable from "../components/tables/bigImageTable";
import TableLeftWrapper from "../components/tables/tableLeftWrapper";

const Home: NextPage = () => {
  const conference = useQuery([ConferenceListQueryKey], () => getConferenceListApi(), {
    staleTime: Infinity,
  });
  const bestBoard = useQuery([BestBoardQueryKey], () => getBestBoard());
  const questionBoard = useBoardByCategory({ category: 'question' });
  const infoBoard = useBoardByCategory({ category: 'info' });
  const communityBoard = useBoardByCategory({ category: 'community' });
  const recruitBoard = useBoardByCategory({ category: 'recruit' });
  const noticeBoard = useBoardByCategory({ category: 'notice', limit: 3 });

  return (
    <TableLeftWrapper>
      {!!noticeBoard.data?.list && noticeBoard.data.list.length !== 0 &&
        <VerticalSlideTable list={noticeBoard.data.list} />
      }
      {!!bestBoard.data && <TwoRowTable list={bestBoard.data} />}
      {!!conference.data && <BigImageTable list={conference.data} />}
      {!!questionBoard.data?.list && questionBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='Q&A'
          tab='/question'
          list={questionBoard.data.list}
          showPagination={false}
        />
      }
      {!!infoBoard.data?.list && infoBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='????????????'
          tab='/info'
          list={infoBoard.data.list}
          showPagination={false}
        />
      }
      {!!communityBoard.data?.list && communityBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='????????????'
          tab='/community'
          list={communityBoard.data.list}
          showPagination={false}
        />
      }
      {!!recruitBoard.data?.list && recruitBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='????????????'
          tab='/recruit'
          list={recruitBoard.data.list}
          showPagination={false}
        />
      }
    </TableLeftWrapper>
  )
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  await Promise.all([
    queryClient.prefetchQuery([ConferenceListQueryKey], () => getConferenceListApi(), {
      staleTime: Infinity
    }),
    queryClient.prefetchQuery([BestBoardQueryKey], () => getBestBoard()),
    queryClient.prefetchQuery([BoardByCategoryQueryKey, { category: 'question', offset: 0, limit: 5}], () => getBoardByCategoryApi({ category: 'question', offset: 0, limit: 5})),
    queryClient.prefetchQuery([BoardByCategoryQueryKey, { category: 'info', offset: 0, limit: 5}], () => getBoardByCategoryApi({ category: 'info', offset: 0, limit: 5})),
    queryClient.prefetchQuery([BoardByCategoryQueryKey, { category: 'community', offset: 0, limit: 5}], () => getBoardByCategoryApi({ category: 'community', offset: 0, limit: 5})),
    queryClient.prefetchQuery([BoardByCategoryQueryKey, { category: 'recruit', offset: 0, limit: 5}], () => getBoardByCategoryApi({ category: 'recruit', offset: 0, limit: 5})),
    queryClient.prefetchQuery([BoardByCategoryQueryKey, { category: 'notice', offset: 0, limit: 5}], () => getBoardByCategoryApi({ category: 'notice', offset: 0, limit: 5}))
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
  },
  }
};

