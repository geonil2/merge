import axios from "axios";

export const getHotIssueApi = async () => {
  const { data } = await axios.post(`/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
    baseURL: 'https://api.notion.com',
    headers: {
      "Authorization" : `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": "2022-02-22",
    }
  });
  return data;
}
