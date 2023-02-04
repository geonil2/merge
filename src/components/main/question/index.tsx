import useBoardByCategory from "../../../hooks/useBoardListByCateogry";
import VerticalListTable from "../../tables/verticalListTable";

const Question = () => {
  const { data: questionBoard } = useBoardByCategory({ category: 'question' });

  return (
    <>
      {!!questionBoard?.list && questionBoard.list.length !== 0 &&
        <VerticalListTable
          title='Q&A'
          tab='/question'
          list={questionBoard.list}
          showPagination={false}
        />
      }
  </>
  )
}

export default Question;