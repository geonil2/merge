interface User {
  email: string,
  name: string,
  image: string,
}

export interface LoginRequestBody {
  accessToken: string,
  expires: string,
  user: User,
}
