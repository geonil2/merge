import React, { forwardRef } from "react";

import * as S from "./style";

interface Prop {
  menuLists: List[];
}

interface List {
  title: string;
  onClick: () => void;
}

const DropdownMenu = forwardRef<
  HTMLUListElement,
  React.PropsWithChildren<Prop>
>(({ menuLists }: Prop, ref) => {
  return (
    <S.Container ref={ref}>
      {menuLists.map((list) => (
        <li key={list.title} onClick={() => list.onClick()}>
          {list.title}
        </li>
      ))}
    </S.Container>
  );
});
DropdownMenu.displayName = "DropdownMenu";

export default DropdownMenu;
