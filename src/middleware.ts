import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // Get current path
    const path = req.nextUrl.pathname;
    
    // Define public paths that don't need authentication
    const publicPaths = ["/login", "/register", "/forgot-password"];
    
    // Check if current path is public
    const isPublicPath = publicPaths.some(publicPath => 
        path.startsWith(publicPath)
    );
    
    const cookie = req.cookies.get("token");
    console.log(cookie) 
    
    // Get authentication token
    const token = req.cookies.get("token");
    console.log("token", token);
    
    // Redirect logic for authenticated users trying to access public paths
    if (token && isPublicPath) {
        const url = new URL("/home", req.url);
        return NextResponse.redirect(url);
    }
    
    // Redirect logic for unauthenticated users trying to access protected paths
    if (!token && !isPublicPath) {
        // Store the original URL to redirect back after login
        const url = new URL("/auth/login", req.url);
        console.log(isPublicPath);
        console.log("url", url);
        return NextResponse.redirect(url);
    }
    
    // Optional: Token validation
    if (token) {
        try {
            // You can add token validation logic here
            // Example: verify JWT token, check expiration, etc.
            
            // Add user info to headers for downstream use
            const requestHeaders = new Headers(req.headers);
            requestHeaders.set("x-user-token", token.value);
            console.log("requestHeaders", requestHeaders);
            
            return NextResponse.next({
                request: {
                    headers: requestHeaders,
                }
            });
        } catch (error) {
            // If token is invalid, clear it and redirect to login
            const response = NextResponse.redirect(new URL("/auth/login", req.url));
            console.log("response", response , error);
            response.cookies.delete("token");
            console.error("Token validation error:", error);
            return response;
        }
    }

    return NextResponse.next();
}



export const config = {
    matcher: [
      /*
       * Match all request paths except for:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - public folder files (public files)
       */
      "/((?!api|_next/static|_next/image|favicon.ico|public).*)"
    ],
  };
