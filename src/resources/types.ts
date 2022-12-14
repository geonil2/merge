import {Category} from "../services/board/types";

export interface popupContents {
  title: string
  description: string
  secondButton: boolean,
  onClick?: () => void
}

export type Menu = {
  id: number,
  name: Category | string,
  title: string,
  url: string,
  disabled: boolean
}

export const popupModalContents: { [key: string]: popupContents } = require("../resources/popup.json");
export const menuList: Menu[] = require("../resources/menu.json");
