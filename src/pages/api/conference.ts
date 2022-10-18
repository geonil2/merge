import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import {isAxiosError} from "../../config/api";
import {Data} from "./news";

interface OriginalConferenceData {
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

type Tag = {
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


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const headers = {
      'Authorization' : `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': "2022-02-22",
    }

    const { data } = await axios.post(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,{
        'sorts': [
          {
            'property': 'Date',
            'direction': 'ascending'
          }
        ]
      },
      {
        headers
      })

    const ProcessedData = data.results.map((list: OriginalConferenceData) => {
      const tag = list.properties.Tags.multi_select.map((tag: Tag) => tag.name)

      return {
        title: list.properties.Name.title[0].plain_text,
        date: list.properties.Date.date.start,
        image: list.cover.external ? list.cover.external.url : list.cover.file.url,
        url: list.properties.URL.url,
        tag
      }
    })

    res.status(200).json({ data: ProcessedData })
  } catch (e) {
    if (isAxiosError(e)) {
      res.status(e.response?.status || 500).json(e.response?.data || {})
    }
  }
}

export default handler
