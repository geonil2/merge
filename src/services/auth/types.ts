export const authenticateQueryKey = 'authenticate'
export const getUserQueryKey = 'getUser';
export const signoutQueryKey = 'signout'

export interface User {
  _id: string,
  accessToken?: string,
  email: string,
  name: string,
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


export interface RefreshTokenResponseData {
  data: {
    accessToken: string
  }
}



export interface nextAuthLoginResponseData {
  accessToken: string,
  expires: string,
  user: User,
}


