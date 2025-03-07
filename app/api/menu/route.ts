import { NextResponse } from "next/server";
import { Menu } from "@/models/Menu";
import { connectDB } from "@/lib/dbConnect";

export async function GET() {
  await connectDB();
  const menuItems = await Menu.find({});
  return NextResponse.json(menuItems, { status: 200 });
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const newItem = new Menu(data);
  await newItem.save();
  return NextResponse.json({ message: "Item added!", item: newItem }, { status: 201 });
}
