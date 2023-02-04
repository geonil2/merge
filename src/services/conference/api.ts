import axios from "axios";
import {OriginalConferenceData, Tag} from "./types";

export const getConferenceListApi = async () => {
  const headers = {
    'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
    'Notion-Version': "2022-02-22",
  }

  const { data } = await axios.post(`https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,{
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

  const processedData = data.results.map((list: OriginalConferenceData) => {
    const tag = list.properties.Tags.multi_select.map((tag: Tag) => tag.name)

    return {
      id: list.id,
      title: list.properties.Name.title[0].plain_text,
      date: list.properties.Date.date.start,
      image: list.cover.external ? list.cover.external.url : list.cover.file.url,
      url: list.properties.URL.url,
      tag
    }
  })
  return processedData;
}
