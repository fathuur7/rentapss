import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
    // Define restricted paths
    const restrictedPaths = ["/about", "/contact", "/products", "/home", "/profile"]
    
    // Get current path and make sure it matches exactly
    const path = req.nextUrl.pathname
    
    // Check if the current path exactly matches any restricted path
    if (restrictedPaths.includes(path)) {
        const token = req.cookies.get("token")
        if (!token) {
            // Redirect to login page with proper URL construction
            const url = new URL("/", req.url)
            return NextResponse.redirect(url)
        }
    }
    
    return NextResponse.next()
}

// Fix typo in 'matcher' and ensure paths end with /*
export const config = {
    matcher: [
        "/about/:path*",
        "/contact/:path*",
        "/products/:path*",
        "/home/:path*",
        "/profile/:path*"
    ]
}