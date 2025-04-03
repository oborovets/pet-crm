import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { auth } from '../auth';

import type { Session } from '@/types/session';

const redirectIfAuthenticated = (
  session: Session | null,
  pathname: string,
  baseUrl: string
) => {
  if (session && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', baseUrl));
  }
};

const redirectIfNotAuthenticated = (
  session: Session | null,
  pathname: string,
  baseUrl: string
) => {
  const loginUrl = new URL('/login', baseUrl);

  if (!session && pathname !== '/login') {
    loginUrl.searchParams.set('unauthorized', 'true');
    loginUrl.searchParams.set('callbackUrl', pathname);

    return NextResponse.redirect(loginUrl);
  }
};

export async function middleware(req: NextRequest) {
  const session = await auth();
  const nextUrlPathname = req.nextUrl.pathname;

  const authRedirect = redirectIfAuthenticated(
    session,
    nextUrlPathname,
    req.url
  );
  if (authRedirect) return authRedirect;

  const notAuthRedirect = redirectIfNotAuthenticated(
    session,
    nextUrlPathname,
    req.url
  );
  if (notAuthRedirect) return notAuthRedirect;

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/tickets/:path*',
    '/profile/:path*',
    '/login',
  ],
};
