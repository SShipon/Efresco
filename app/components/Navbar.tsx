"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { BiCartAdd, BiSearch } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const listItems = [
    {
      id: crypto.randomUUID(),
      page: 'home',
      location: '/'
    },
    {
      id: crypto.randomUUID(),
      page: 'shop',
      location: '/shop'
    },
    {
      id: crypto.randomUUID(),
      page: 'blog',
      location: '/blog'
    },
    {
      id: crypto.randomUUID(),
      page: 'pages',
      location: '/pages'
    },
    {
      id: crypto.randomUUID(),
      page: 'contact',
      location: '/contact'
    }
  ]

  return (
    // <nav className="border-b border-b-slate-500 px-5 py-7 text-white flex justify-between items-center">
    <nav className='bg-[#d12525] border-b border-b-slate-500 px-5 py-7 text-white flex justify-between items-center'>
      <Link href='/' className='text-lg font-bold'>
        <Image
          width={150}
          height={50}
          src='Asset-2.svg'
          alt='logo'
        />
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Menu Items */}
      {/* <div className='lg:w-7/10 flex items-center lg:gap-x-5 border-3 border-green-700'> */}
      {/* <div className={`lg:flex lg:items-center lg:gap-x-5 ${menuOpen ? "block" : "hidden"} absolute top-20 left-0 w-full lg:relative lg:top-0 lg:w-auto bg-[#d12525] lg:bg-transparent`}> */}
      <div
        className={`lg:flex lg:items-center lg:gap-x-5 absolute lg:relative top-20 right-0 w-full z-30 lg:top-0 lg:w-auto bg-[#d12525] lg:bg-transparent px-5 py-5 lg:p-0 transition-all duration-300 ease-in-out`}
      >
        {/* <ul className='flex lg:gap-x-8 uppercase'> */}
        <ul className={`lg:flex flex-col lg:flex-row items-center lg:gap-x-8 uppercase absolute right-5 lg:static z-30 w-36 lg:w-auto bg-white opacity-85 lg:opacity-100 text-[#d12525] lg:bg-[#d12525] lg:text-white ${menuOpen ? "block" : "hidden"}`}>
          {
            listItems.map(item =>
              <li key={item.id} className='hover:text-[#ffb936] border-b border-[#d12525] w-full lg:w-auto text-center lg:text-start '>
                <Link href={item.location} onClick={() => setMenuOpen(false)}>
                  <h4 className='text-lg font-semibold py-1'>{item.page}</h4>
                </Link>
              </li>
            )
          }
        </ul>

        <div className='flex items-center gap-x-8 lg:gap-x-5 absolute -top-15 left-1/3 lg:static'>
          {/* Search & Cart */}
          {/* <div className='lg:pl-6 flex lg:gap-x-7'> */}
          <div className='md:flex gap-x-5 mt-3 lg:mt-0 hidden'>
            <BiSearch size={24} />
            <BiCartAdd size={24} />
          </div>

          {/* <button className='flex items-center gap-x-1 xl:gap-x-2 uppercase border border-white px-3 xl:px-5 py-3 hover:bg-white hover:text-black cursor-pointer'> */}
          <button className="invisible md:visible hidden sm:flex items-center gap-x-2 uppercase border border-white px-5 py-3 hover:bg-white hover:text-black cursor-pointer">
            <TbTruckDelivery size={24} />
            <p>order now</p>
          </button>

          <div className='hidden lg:block'>
            <Image
              width={30}
              height={30}
              src='bar-white.svg'
              alt='bar'
            />
          </div>

          {/* Login & Logout */}
          <div className="text-center ml-20 sm:ml-0">
            {session ? (
              <>
                <Link href="/dashboard" className="mr-4 block lg:inline">Dashboard</Link>
                <button onClick={() => signOut()} className="bg-[#d12525] px-4 py-2 rounded block lg:inline">Logout</button>
              </>
            ) : (
              <Link href="/login" className="bg-green-500 p-2 rounded block lg:inline">Login</Link>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
}