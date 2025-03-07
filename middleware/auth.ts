import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  role?: string;
}

export function verifyAuth(req: NextRequest) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as CustomJwtPayload;
    return decoded;
  } catch {
    return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
  }
}

export function requireAdmin(req: NextRequest) {
  const decoded = verifyAuth(req);
  if (decoded && typeof decoded === "object" && "role" in decoded && decoded.role === "admin") {
    return decoded;
  }
  return NextResponse.json({ error: "Admin Access Required" }, { status: 403 });
}