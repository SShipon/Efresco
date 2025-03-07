"use server";

import { connectDB } from "@/lib/dbConnect";
import { Cart } from "@/models/Cart";

// ✅ Cart-এ নতুন Item Add করা
export const addToCart = async (userId: string, menuId: string, quantity: number) => {
  await connectDB();
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  const itemIndex = cart.items.findIndex((item: { menuId: { toString: () => string; }; }) => item.menuId.toString() === menuId);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ menuId, quantity });
  }

  await cart.save();
  return { message: "Item added to cart!" };
};
