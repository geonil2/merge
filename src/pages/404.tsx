import { FC } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import CommonButton from "../components/commonButton"
import TableLeftWrapper from "../components/tables/tableLeftWrapper";

const NotFoundPage: FC = () => {
  return (
    <Container>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <Link href='/' passHref>
        <CommonButton
          title='메인으로 돌아가기'
        />
      </Link>
    </Container>
  )
}

const Container = styled(TableLeftWrapper)`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-weight: 700;
    text-align: center;
  }
`

export default NotFoundPage
