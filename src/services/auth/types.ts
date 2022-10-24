export const TOKEN_STORAGE_KEY = 'accessToken';

export interface User {
  _id: string,
  accessToken?: string,
  email: string,
  name: string,
  image: string,
  createdAt: string,
  updatedAt: string
}

export interface nextAuthLoginResponseData {
  accessToken: string,
  expires: string,
  user: User,
}
