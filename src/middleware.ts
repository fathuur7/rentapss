import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { getSession } from "./utils/getSession";

const protectedRoutes = ["/home", "/about", "/contact", "/products", "/profile"];

export async function middleware(req: NextRequest) {
    // Ambil token dari cookies
    const token = req.cookies.get("token")?.value;

    if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect ke halaman login
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/home", "/about", "/contact", "/products", "/profile"],
};
