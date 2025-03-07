/* eslint-disable @typescript-eslint/no-unused-vars */

import { connectDB } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    // Update role to admin
    user.role = "admin";
    await user.save();

    return NextResponse.json({ message: "User role updated to admin!", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
