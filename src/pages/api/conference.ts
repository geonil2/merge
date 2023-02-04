import {NextApiRequest, NextApiResponse} from "next";
import {Data} from "./news";
import axios from "axios";
import {OriginalConferenceData, Tag} from "../../services/conference/types";
import {isAxiosError} from "../../config/api";


/**
 *  This API not use. because conference API's using getServerSideProps.
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
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
    });

    res.status(200).json({ data: processedData });
  } catch(e) {
    if (isAxiosError(e)) {
      res.status(e.response?.status || 500).json(e.response?.data || {})
    }
  }
}

export default handler
