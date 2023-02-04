import useBoardByCategory from "../../../hooks/useBoardListByCateogry";
import VerticalListTable from "../../tables/verticalListTable";

const Info = () => {
  const { data: infoBoard } = useBoardByCategory({ category: 'info' });

  return (
    <>
      {!!infoBoard?.list && infoBoard.list.length !== 0 &&
        <VerticalListTable
          title='개발정보'
          tab='/info'
          list={infoBoard.list}
          showPagination={false}
        />
      }
  </>
  )
}

export default Info;