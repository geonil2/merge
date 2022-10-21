export const ConferenceListQueryKey = 'getConferenceList'

export interface OriginalConferenceData {
  object: string,
  id: string,
  create_time: string,
  last_edited_time: string,
  created_by: ByData,
  last_edited_by: ByData,
  cover: Cover,
  icon: string | null,
  parent: Parent,
  archived: boolean,
  properties: Properties,
  url: string
}

type ByData = {
  object: string,
  id: string
}

type Cover = {
  type: string,
  external?: {
    url: string
  },
  file: {
    url: string,
    expiry_time: string
  }
}

type Parent = {
  type: string,
  database_id: string
}

type Properties = {
  URL: URL,
  Date: DateType,
  Tags: Tags,
  Name: Name
}

type URL = {
  id: string,
  type: string,
  url: string
}

type DateType = {
  id: string,
  type: string,
  date: Date
}

type Date = {
  start: string,
  end: string | null,
  time_zone: string | null,
}

type Tags = {
  id: string,
  type: string,
  multi_select: Tag[]
}

export type Tag = {
  color: string,
  id: string,
  name: string
}

type Name = {
  id: string,
  type: string,
  title: Title[]
}

type Title = {
  type: string,
  text: {
    content: string,
    link: string | null
  },
  annotations: {
    bold: boolean,
    italic: boolean,
    strikethrough: boolean,
    underline: boolean,
    code: boolean,
    color: string
  },
  plain_text: string,
  href: string | null
}
