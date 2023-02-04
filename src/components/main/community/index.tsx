import useBoardByCategory from "../../../hooks/useBoardListByCateogry";
import VerticalListTable from "../../tables/verticalListTable";

const Community = () => {
  const { data: communityBoard } = useBoardByCategory({ category: 'community' });

  return (
    <>
      {!!communityBoard?.list && communityBoard.list.length !== 0 &&
        <VerticalListTable
          title='커뮤니티'
          tab='/community'
          list={communityBoard.list}
          showPagination={false}
        />
      }
  </>
  )
}

export default Community;