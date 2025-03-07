/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/lib/db.Connect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { z } from "zod";
import User from "@/models/User";


const loginSchema = z.object({
  email: z.string().email("Please provide a valid email."),
  password: z.string().min(6, "The password must be at least 6 characters long"),
});

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: "1d" });

    return NextResponse.json({ message: "Login Successful", token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid Data" }, { status: 400 });
  }
}

//middleware/auth.ts