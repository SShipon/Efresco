/* eslint-disable @typescript-eslint/no-unused-vars */

import { connectDB } from "@/lib/db.Connect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(3, "The name must be at least 3 characters long."),
  email: z.string().email("Please provide a valid email."),
  password: z.string().min(6, "The password must be at least 6 characters long"),
});

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, password } = signupSchema.parse(body);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "The email has already been used." }, { status: 400 });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });

    return NextResponse.json({ message: "User Created Successfully!", user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid Data" }, { status: 400 });
  }
}