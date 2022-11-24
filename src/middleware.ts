import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";
import { signOut } from "next-auth/react"

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/writing')) {
    if (
      !!request.cookies.get('next-auth.session-token') ||
      !!request.cookies.get('__Secure-next-auth.session-token')
    ) {
      return null
    }
      signOut()
      return NextResponse.rewrite(new URL("/", request.url));
  }
}
