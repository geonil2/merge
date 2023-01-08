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
import MainLayout from "../components/mainLayout";

const Home: NextPage = () => {
  const { data: conference } = useQuery([ConferenceListQueryKey], () => getConferenceListApi(), {
    staleTime: Infinity,
  });
  const { data: bestBoard } = useQuery([BestBoardQueryKey], () => getBestBoard());
  const { data: questionBoard } = useBoardByCategory({ category: 'question' });
  const { data: infoBoard } = useBoardByCategory({ category: 'info' });
  const { data: communityBoard } = useBoardByCategory({ category: 'community' });
  const { data: recruitBoard } = useBoardByCategory({ category: 'recruit' });
  const { data: noticeBoard } = useBoardByCategory({ category: 'notice', limit: 3 });
  console.log(noticeBoard, 'noticeBaord')
  return (
    <MainLayout hasAsideBar={true}>
      <TableLeftWrapper>
        {!!noticeBoard?.list && noticeBoard.list.length !== 0 &&
          <VerticalSlideTable list={noticeBoard.list} />
        }
        {!!bestBoard && <TwoRowTable list={bestBoard} />}
        {!!conference && <BigImageTable list={conference} />}
        {!!questionBoard?.list && questionBoard.list.length !== 0 &&
          <VerticalListTable
            title='Q&A'
            tab='/question'
            list={questionBoard.list}
            showPagination={false}
          />
        }
        {!!infoBoard?.list && infoBoard.list.length !== 0 &&
          <VerticalListTable
            title='개발정보'
            tab='/info'
            list={infoBoard.list}
            showPagination={false}
          />
        }
        {!!communityBoard?.list && communityBoard.list.length !== 0 &&
          <VerticalListTable
            title='커뮤니티'
            tab='/community'
            list={communityBoard.list}
            showPagination={false}
          />
        }
        {!!recruitBoard?.list && recruitBoard.list.length !== 0 &&
          <VerticalListTable
            title='구인구직'
            tab='/recruit'
            list={recruitBoard.list}
            showPagination={false}
          />
        }
      </TableLeftWrapper>
    </MainLayout>
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

