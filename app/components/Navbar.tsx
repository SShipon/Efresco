"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { BiCartAdd, BiSearch } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-500 border-b border-b-white p-4 text-white flex justify-between items-center">
      <Link href="/" className="text-lg font-bold">
        <Image width={150} // Set your desired width
 height={50} src='logo-white.svg' alt='logo' />
      </Link>

      {/* Menu */}
      <div className='flex items-center gap-x-5'>
        <ul className='flex gap-x-5 uppercase'>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/shop">shop</Link>
          </li>
          <li>
            <Link href="/">blog</Link>
          </li>
          <li>
            <Link href="/shop">pages</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
        </ul>

        {/* Search & Cart */}
        <div className='flex gap-x-3'>
          <BiSearch size={24} />
          <BiCartAdd size={24} />
        </div>

        <button className='flex gap-x-2 uppercase border border-white px-5 py-3 rounded'>
          <TbTruckDelivery size={24} />
          <p>order now</p>
        </button>

        <div>
          <Image  width={40} // Set your desired width
 height={50}  src='bar-white.svg' alt='bar' />
        </div>

        {/* Login & Logout */}
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
      </div>

    </nav>
  );
}