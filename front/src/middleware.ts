import { NextResponse, NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {

    const token = req.cookies.get('userToken')?.value;

    const verifyPath = ['/cart', '/orders', '/dashboard'];
    const verifyAuth = ['/login', '/register'];

    if (!token && verifyPath.some(path => req.nextUrl.pathname.startsWith(path))) return NextResponse.redirect(new URL('/', req.url));
    if (token && verifyAuth.some(path => req.nextUrl.pathname.startsWith(path))) return NextResponse.redirect(new URL('/', req.url));

    NextResponse.next();

};

export const config = {
    matcher: ['/cart', '/orders', '/dashboard', '/login', '/register'],
};