
import { connectDB } from "@/lib/db.Connect";
import User from "@/models/User";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { email } = await req.json();

  const user = await User.findOneAndUpdate({ email }, { role: "admin" }, { new: true });

  if (!user) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  return NextResponse.json({ message: "User Updated to Admin!", user }, { status: 200 });
}

//app/api/auth/[...nextauth]/route.ts