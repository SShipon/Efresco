"use server";

import { connectDB } from "@/lib/dbConnect";
import { Menu } from "@/models/Menu";


// ✅ নতুন Food Item Add করা
export const addMenuItem = async (name: string, description: string, price: number, image: string, category: string) => {
  await connectDB();
  const newItem = new Menu({ name, description, price, image, category });
  await newItem.save();
  return { message: "Menu item added successfully!" };
};
