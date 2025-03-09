import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl;
    const role = req.nextauth.token?.user?.role;

    // ✅ সাধারণ User Dashboard এ ঢুকতে পারবে না
    if (url.pathname.startsWith("/dashboard") && role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url)); // সাধারণ User হোমপেজে যাবে
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // ✅ লগইন করা থাকলে অনুমতি দেবে
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"], // ✅ শুধু Dashboard-এ Middleware চালাবে
};