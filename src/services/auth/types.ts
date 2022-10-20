export const TOKEN_STORAGE_KEY = 'accessToken';

export interface User {
  email: string,
  name: string,
  image: string,
}

export interface nextAuthLoginResponseData {
  accessToken: string,
  expires: string,
  user: User,
}
