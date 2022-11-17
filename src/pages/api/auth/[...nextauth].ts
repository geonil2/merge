import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import jwt from "jsonwebtoken";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, isNewUser, account, profile }) {
      if (user) {
        token.id = user.id
      }
      const payload = { _id: token.sub };
      const accessToken = jwt.sign(payload, process.env.SECRET as string, { expiresIn: "1h" });
      token.accessToken = accessToken
      if (user) token.userId = user.id
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken as string;
      session.user._id = token.userId as string;
      return session
    }
  },
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  },
});
