// middleware.ts (in project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Explicit console logging
  console.error('MIDDLEWARE ACTIVATED');
  console.error('Request Path:', request.nextUrl.pathname);
  console.error('Full URL:', request.url);

  // Simple logging for all methods
  console.log({
    method: request.method,
    pathname: request.nextUrl.pathname,
    headers: Object.fromEntries(request.headers)
  });

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/home/path',
    '/login',
    '/register',
    '/about/:path*'
  ]
};