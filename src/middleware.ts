import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/writing')) {
    if (
      !!request.cookies.get('next-auth.session-token') &&
      !!request.cookies.get('__Secure-next-auth.session-token')
    ) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  }
}
