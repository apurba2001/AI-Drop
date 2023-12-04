import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublic = path === '/auth'
    const token = request.cookies.get('token')?.value


    if (isPublic && token) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (!isPublic && !token) {
        return NextResponse.redirect(new URL('/auth', request.url))
    }

}

export const config = {
    matcher: [
        '/',
        '/auth',
        '/large-airdrop/:path*',
        '/small-airdrop/:path*',
    ],
}