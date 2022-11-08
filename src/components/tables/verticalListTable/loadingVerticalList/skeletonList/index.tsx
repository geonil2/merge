import {Skeleton} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const SkeletonList = () => {
  return (
    <ListLayout>
      <List>
        <div style={{width: '100%'}}>
          <Title>
            <Skeleton variant="rectangular" animation="wave" width='100%' height={16} />
          </Title>
          <Owner>
            <Skeleton variant="rectangular" animation="wave" height={12} />
          </Owner>
        </div>
      </List>
    </ListLayout>
  )
};


const ListLayout = styled.div`
  height: 70px;
  margin: 0px 24px;
`

const List = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.div`
  padding: 3px 0px;
  margin-bottom: 8px;
`

const Owner = styled.span`
  margin-right: 10px;
`

export default SkeletonList;
