import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { auth } from '../auth';

export async function middleware(req: NextRequest) {
  const session = await auth();
  const loginUrl = new URL('/login', req.url);

  loginUrl.searchParams.set('unauthorized', 'true');
  loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
