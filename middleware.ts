import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.redirect(new URL("/", req.url)); // 👈 এটা API ব্লক করবে!
  }
}
