import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import jwt from "jsonwebtoken";
// import dbConnect from "./lib/dbConnect";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     // access_type: "offline",
      //     // response_type: "code"
      //   }
      // }
    })
  ],
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account && account.provider === "google") {
    //     console.log(profile, 'profile')
    //     return profile?.email_verified && profile.email?.endsWith("gmail.com")
    //   }
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },
    async jwt({ token, user, isNewUser, account, profile }) {
      if (user) {
        token.id = user.id
      }
      const payload = { _id: token.sub };
      console.log(user, 'jwt user')
      console.log(token.userId, 'jwt token.userId')
      const accessToken = jwt.sign(payload, process.env.SECRET as string, { expiresIn: "1h" });
      token.accessToken = accessToken
      if (user) token.userId = user.id
      return token;
    },
    async session({ session, token, user }) {
      console.log(user, 'session user')
      console.log(token, 'session token')
      session.accessToken = token.accessToken as string;
      session.user._id = token.userId as string;
      // session.user = token.user
      console.log(session, 'session session')
      return session
    }
  },
  secret: process.env.SECRET,
  // jwt: {
  //   encode: async ({ secret, token, maxAge }) => {
  //     const payload = { _id: user._id };
  //     jwt.sign(payload, secret, {expiresIn: "1d",});
  //   }
  // },
  session: {
    strategy: 'jwt'
  },
});
