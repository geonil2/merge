import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../../config/styles";
import {Skeleton} from "@mui/material";

const LoadingVerticalList = () => {
  const list = [0,1,2,3,4,5,6,7,8,9]
  return (
    <Container>
      <div className="title"></div>
        {list.map(list => (
          <ListLayout key={list}>
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
        ))}
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  padding-bottom: 22px;
  > .title {
    height: 60px;  
  }
`

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

export default LoadingVerticalList;
