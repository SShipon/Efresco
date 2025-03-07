"use server";
import { Order } from "@/models/Order";
import { connectDB } from "@/lib/dbConnect";
import User from "@/models/User";

// Users Data
export const getUsers = async () => {
  await connectDB();
  return await User.find();
};

// Orders Data 
export const getOrders = async () => {
  await connectDB();
  return await Order.find();
};
