export interface popupContents {
  title: string
  description: string
  secondButton: boolean,
  onClick?: () => void
}

export const popupModalContents: { [key: string]: popupContents } = require("../resources/popup.json");
