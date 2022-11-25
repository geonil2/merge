## Merge

* Description
* Specs
* APIs
* Link

### Description
> 개발자 커뮤니티 플랫폼

### Specs
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/NextAuth-3423A6?style=flat-square&logo=WebAuthn&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-61DAFB?style=flat-square&logo=React&logoColor=black"/>

- Node 16.14.2
- NPM 8.5.0

### APIs
다음과 같은 외부 API를 사용했습니다.
- Google API
- Naver API
- Notion API  
&nbsp;
#### News
#### GET /api/news
업계 관련된 뉴스를 반환합니다.
- Request example
```
GET /api/news
```
- Response example
```
{
  "data": [
    {
      "_id" : string,
      "title" : string,
      "description" : string,
      "url" : string,
      "createdAt" : string
    }
  ]
}
```

### Link
[https://merge.immmapp.com](https://merge.immmapp.com)
