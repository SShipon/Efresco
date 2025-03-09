"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <Link href="/" className="text-lg font-bold">Restaurant</Link>

      <div>
        {session ? (
          <>
            <Link href="/dashboard" className="mr-4">Dashboard</Link>
            <button onClick={() => signOut()} className="bg-red-500 p-2 rounded">Logout</button>
          </>
        ) : (
          <Link href="/login" className="bg-green-500 p-2 rounded">Login</Link>
        )}
      </div>
    </nav>
  );
}