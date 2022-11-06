import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/writing')) {
    // This logic is only applied to /about
    console.log(!request.cookies.get('next-auth.session-token'), 'req!')
    console.log(request.url, 'req!')
    // const session = await getSession({ request })
    if (!request.cookies.get('next-auth.session-token')) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}
