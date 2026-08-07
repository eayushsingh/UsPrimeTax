import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Block requests from unusual origins
  const origin = request.headers.get('origin')

  if (request.method === 'POST') {
    // Only allow same-origin POST requests
    if (origin && !origin.includes(process.env.NEXT_PUBLIC_SITE_URL || '')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
