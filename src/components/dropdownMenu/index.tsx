import React, {forwardRef} from "react";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../config/styles";

interface Prop {
  menuLists: List[],
}

interface List {
  title: string,
  onClick: () => void
}

const DropdownMenu = forwardRef<HTMLUListElement, React.PropsWithChildren<Prop>>(({ menuLists }: Prop, ref) => {
  return (
    <Container ref={ref}>
      {menuLists.map(list => <li onClick={() => list.onClick()}>{list.title}</li>)}
    </Container>
  );
});

const Container = styled.ul`
  position: absolute;
  top: 100%;
  left: -12px;
  width: max-content;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  border-radius: 5px;
  padding: 5px 12px;
  margin-top: 5px;
  cursor: pointer;
  > li {
    color: ${COLORS.GRAY};
    border-bottom: 1px solid ${COLORS.GRAY};
    padding: 2px 0px;
    &:hover {
      color: ${COLORS.PRIMARY};
    }
    &:last-child {
      border: none; 
    }
  }
`

export default DropdownMenu;
