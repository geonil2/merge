import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import {isAxiosError} from "../../config/api";

export type Data = any

interface OriginalNewsData {
  title: string,
  originallink: string,
  link: string,
  description: string,
  pubDate: string,
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {

  try {
    const headers = {
      'X-Naver-Client-Id' : process.env.NEXT_PUBLIC_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_CLIENT_SECRET
    }

    const { data } = await axios.get('https://openapi.naver.com/v1/search/news.json',{
      params:{
        query: '개발자',
        display: 10
      },
      headers,
    })

    const ProcessedData = data.items.map((list: OriginalNewsData, index: number) => {
      const { title, description, originallink, pubDate } = list;
      return {
        id: index,
        title,
        description,
        url: originallink,
        created_at: pubDate
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
