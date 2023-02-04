import useBoardByCategory from "../../../hooks/useBoardListByCateogry";
import VerticalSlideTable from "../../tables/verticalSlideTable";

const Notice = () => {
  const { data: noticeBoard } = useBoardByCategory({ category: 'notice', limit: 3 });

  return (
    <>
      {noticeBoard?.list && <VerticalSlideTable list={noticeBoard.list} />}
    </>
  )
}

export default Notice;