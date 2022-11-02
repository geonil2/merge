import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    accessToken: string
    user: {
      _id: string
    }
  }

  interface Profile {
    email_verified: any
  }
}
