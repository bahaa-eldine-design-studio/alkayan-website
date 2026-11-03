import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  const locale = request.nextUrl.pathname.split('/')[1] === 'en' ? 'en' : 'ar';
  headers.set('x-site-locale', locale);
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] };
