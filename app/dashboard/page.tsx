"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome, {session.user?.name}!</p>
      <p>Your Role: {session.user?.role}</p>

      <button
        onClick={() => signOut()}
        className="mt-4 bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

