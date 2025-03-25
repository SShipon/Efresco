"use client";

import Image from "next/image";
import Link from "next/link";
import { BsVimeo } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaArrowUp, FaPinterestP } from "react-icons/fa";

const foodItems = [
  "Hamburger",
  "French Fries",
  "Chicken Pizza",
  "Onion Rings",
  "Vegetable Roll",
  "Chicken Nuggets",
  "Sea Fish",
  "Tacos Pizza",
  "Fried Chicken",
  "Hot Dogs",
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212121] text-white py-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-16">
        {/* Left Section */}
        <div className="space-y-4 pr-5 md:border-r md:border-r-[#363636]">
          <Image src='/Asset-2.svg' alt='logo' width={182} height={45} />
          <p className="text-white leading-relaxed py-5">
            Temporibus autem quibusdam officiis debitis aut rerum necessitatibus saepe eveniet voluta repudiandae molestiae recusandae Itaquear rerum hic tenetur sapiente delectus
          </p>
          <div className="flex gap-4 text-lg">
            <Link href="#" className='border border-[#ffffff2b] w-10 h-10 flex flex-col justify-center items-center rounded-full hover:bg-[#d12525] hover:border-none'>
              <FaFacebookF />
            </Link>
            <Link href="#" className='border border-[#ffffff2b] w-10 h-10 flex flex-col justify-center items-center rounded-full hover:bg-[#d12525] hover:border-none'>
              <FaTwitter />
            </Link>
            <Link href="#" className='border border-[#ffffff2b] w-10 h-10 flex flex-col justify-center items-center rounded-full hover:bg-[#d12525] hover:border-none'>
              <BsVimeo />
            </Link>
            <Link href="#" className='border border-[#ffffff2b] w-10 h-10 flex flex-col justify-center items-center rounded-full hover:bg-[#d12525] hover:border-none'>
            <FaPinterestP />
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="pr-5 lg:border-r lg:border-r-[#363636]">
          <h3 className="text-xl font-semibold">Popular Food</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm pt-8">
            {foodItems.map((food, index) => (
              <li
                key={index}
                className='text-white leading-loose text-[16px] font-light list-none hover:list-disc hover:text-[#d12525] cursor-pointer'
                // className="relative pl-6 hover:text-yellow-500 cursor-pointer before:content-[''] before:absolute before:left-0 before:w-3 before:h-3 before:bg-yellow-500 before:text-black before:rounded-full before:flex before:items-center before:justify-center before:text-xs before:font-bold before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                style={{ "--before-content": `"${index + 1}"` } as React.CSSProperties}
              >
                {food}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold pb-4">Contact Us</h3>
          <p className='py-5'>1403 Washington Ave, New Orlea <br />ns, LA 70130, United States</p>
          <h4 className='text-lg font-bold'>
            <a href="mailto:info@example.com">info@example.com</a>
          </h4>
          <h4 className='text-lg font-bold py-5'>
            <a href="tel:+1718-904-4450" className='text-[#ffb936]'>+1718-904-4450</a>
          </h4>
          <p className='pb-5 text-sm'>Monday - Friday: <span className="text-yellow-400">8am - 4pm</span></p>
          <p className='text-sm'>Saturday: <span className="text-yellow-400">8am - 12am</span></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#363636] mt-10 pt-6 text-center text-white text-sm">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
          <p className='text-xl'>&copy; Copyright <span className='text-[#ffb936]'>{new Date().getFullYear()}</span> <span className='hover:text-[#ffb936] cursor-pointer'>Foodking</span>. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-yellow-500">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-500">Terms & Condition</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 bg-red-500 p-3 rounded-full text-white cursor-pointer shadow-lg hover:bg-red-600 transition-all">
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;