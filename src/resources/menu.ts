export type Menu = {
  id: number,
  name: string,
  title: string,
  url: string
}

export const MENU = [
  {
    id: 1,
    name: 'question',
    title: 'Q&A',
    url: '/question'
  },
  {
    id: 2,
    name: 'info',
    title: '개발정보',
    url: '/info'
  },
  {
    id: 3,
    name: 'community',
    title: '커뮤니티',
    url: '/community'
  },
  {
    id: 4,
    name: 'recruit',
    title: '구인구직',
    url: '/recruit'
  },
  {
    id: 5,
    name: 'notice',
    title: '공지사항',
    url: '/notice'
  }
]
