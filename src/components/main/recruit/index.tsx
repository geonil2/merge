import useBoardByCategory from "../../../hooks/useBoardListByCateogry";
import VerticalListTable from "../../tables/verticalListTable";

const Recruit = () => {
    const { data: recruitBoard } = useBoardByCategory({ category: 'recruit' });

  return (
    <>
      {!!recruitBoard?.list && recruitBoard.list.length !== 0 &&
        <VerticalListTable
          title='구인구직'
          tab='/recruit'
          list={recruitBoard.list}
          showPagination={false}
        />
      }
  </>
  )
}

export default Recruit;