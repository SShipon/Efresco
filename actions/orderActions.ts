"use server";
import { connectDB } from "@/lib/dbConnect";
import { Order } from "@/models/Order";

// ✅ নতুন Order Create করা
export const createOrder = async (userId: string, items: { menuId: string, quantity: number }[], totalAmount: number) => {
  await connectDB();
  const newOrder = new Order({ userId, items, totalAmount, status: "pending" });
  await newOrder.save();
  return { message: "Order placed successfully!" };
};
