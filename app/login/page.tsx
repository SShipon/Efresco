"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Importing icons for show/hide password

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("Email এবং Password দিতে হবে!");
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      // ✅ User Session Check করে Redirect করবে
      const res = await fetch("/api/auth/session");
      const session = await res.json();

      if (session?.user?.role === "admin") {
        router.push("/dashboard"); // ✅ Admin হলে Dashboard এ যাবে
      } else {
        router.push("/"); // ✅ সাধারণ User হলে Home Page এ যাবে
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"} // Toggle password visibility
            placeholder="Password"
            className="border p-2 rounded w-full"
            required
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>

      {/* ✅ Signup এ যাওয়ার জন্য টগল বাটন */}
      <p className="mt-4 text-center">
        Don&apos;t have an account?
        <button
          className="text-blue-600 underline ml-1"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
