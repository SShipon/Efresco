"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session || session.user?.role !== "admin") {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>Welcome, Admin {session.user?.name}!</p>
      <p>Here you can manage the restaurant.</p>
    </div>
  );
}