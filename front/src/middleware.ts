// Next
import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {

    const token = req.cookies.get('userToken')?.value;

    const verifyPath = ['/dashboard', '/cart', '/orders'];
    const verifyAuth = ['/login', '/register'];

    if (!token && verifyPath.some(path => req.nextUrl.pathname.startsWith(path))) return NextResponse.redirect(new URL('/', req.url));
    if (token && verifyAuth.some(path => req.nextUrl.pathname.startsWith(path))) return NextResponse.redirect(new URL('/', req.url));

    NextResponse.next();

};

export const config = {
    matcher: ['/dashboard', '/cart', '/orders', '/login', '/register'],
};