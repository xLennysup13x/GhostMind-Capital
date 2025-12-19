import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const auth = req.headers.get('authorization');
    if (auth !== `Basic ${Buffer.from('ghost:mind').toString('base64')}`) {
      return new Response('Admin only', { status: 401, headers: { 'WWW-Authenticate': 'Basic' } });
    }
  }
}