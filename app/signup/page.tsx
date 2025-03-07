/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const signupSchema = z.object({
  name: z.string().min(3, "The name must be at least 3 characters long."),
  email: z.string().email("Please provide a valid email."),
  password: z.string().min(6, "The password must be at least 6 characters long."),
});

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
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
        <input {...register("name")} placeholder="Full Name" className="border p-2 rounded" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input {...register("email")} type="email" placeholder="Email" className="border p-2 rounded" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input {...register("password")} type="password" placeholder="Password" className="border p-2 rounded" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

// app/login/page.tsx