/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";

// ✅ Custom Token Interface
interface CustomToken {
  role?: string;
}

// ✅ Middleware
export default withAuth(
  function middleware(req: NextRequest) {
    const url = req.nextUrl;

  
    const role = (req as any).nextauth?.token?.role as string | undefined;

   
    if (url.pathname.startsWith("/dashboard") && role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url)); 
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token; 
      },
    },
  }
);


export const config = {
  matcher: ["/dashboard/:path*"],
};
