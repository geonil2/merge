import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    accessToken: string
    user: {
      _id: string,
      email: string,
      name: string,
      image: string,
    }
  }

}
