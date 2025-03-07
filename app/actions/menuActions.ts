"use server";

import { connectDB } from "@/lib/dbConnect";
import { Menu } from "@/models/Menu";

// ✅ Menu Data Fetch করার জন্য Server Action
export const fetchMenuItems = async () => {
  await connectDB();
  const menuItems = await Menu.find({});
  return JSON.parse(JSON.stringify(menuItems)); // Next.js এর জন্য Safe JSON
};
