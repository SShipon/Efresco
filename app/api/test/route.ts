/* eslint-disable @typescript-eslint/no-unused-vars */
  
import { connectDB } from "@/lib/db.Connect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "Database Connected Successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database Connection Failed" }, { status: 500 });
  }
}

// http://localhost:3000/api/test