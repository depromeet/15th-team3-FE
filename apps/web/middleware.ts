import { getWebDomain } from '@/common';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token');

  const response = NextResponse.next();

  if (!accessToken && !request.nextUrl.pathname.startsWith('/auth')) {
    const response = NextResponse.redirect(new URL('/auth', request.url));
    if (request.nextUrl.pathname.startsWith('/meeting/participate/closing')) {
      const originalUrl = `${getWebDomain()}${request.nextUrl.pathname}${request.nextUrl.search}`;
      response.cookies.set('client_redirect_url', encodeURIComponent(originalUrl));
    }
    return response;
  }

  if (accessToken && request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  const redirectUrl = cookieStore.get('client_redirect_url')?.value;
  if (redirectUrl) {
    const redirectUrlPathname = new URL(decodeURIComponent(redirectUrl)).pathname;
    const currentPathname = request.nextUrl.pathname;

    if (redirectUrlPathname === currentPathname) {
      response.cookies.delete('client_redirect_url');
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
