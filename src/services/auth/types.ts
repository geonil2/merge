export const authenticateQueryKey = 'authenticate'
export const getUserQueryKey = 'getUser';
export const signOutQueryKey = 'signOut'

export interface User {
  _id: string,
  accessToken?: string,
  email: string,
  name: string,
  nickname: string,
  image: string,
  createdAt?: string,
  updatedAt?: string
}

export interface SignUpRequestBody {
  name: string,
  email: string,
  nickname: string,
  password: string,
}

export interface SignInRequestBody {
  email: string,
  password: string,
}

export interface UserResponseData {
  data: User
}

export interface RefreshTokenResponseData {
  data: {
    accessToken: string
  }
}


