/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // আগের error মুছে ফেলবে

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("Email এবং Password দিতে হবে!");
      return;
    }

    try {
      const result = await signIn("credentials", { email, password, redirect: false });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Something went wrong. Try again!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input name="email" type="email" placeholder="Email" className="border p-2 rounded" required />
        <input name="password" type="password" placeholder="Password" className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}