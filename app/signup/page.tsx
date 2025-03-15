/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Importing icons for show/hide password

const signupSchema = z.object({
  name: z.string().min(3, "The name must be at least 3 characters long."),
  email: z.string().email("Please provide a valid email."),
  password: z.string().min(6, "The password must be at least 6 characters long."),
});

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/auth/signup", data);
      router.push("/login");
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name")}
          placeholder="Full Name"
          className="border p-2 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"} // Toggle password visibility
            placeholder="Password"
            className="border p-2 rounded w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)} // Toggle the showPassword state
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? (
              <HiEyeOff size={20} />
            ) : (
              <HiEye size={20} />
            )}
          </button>
        </div>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      </form>

      {/* ✅ Login এ যাওয়ার জন্য টগল বাটন */}
      <p className="mt-4 text-center">
        Already have an account?
        <button
          className="text-blue-600 underline ml-1"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </p>
    </div>
  );
}
