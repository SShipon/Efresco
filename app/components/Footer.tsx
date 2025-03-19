"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterest, FaArrowUp } from "react-icons/fa";

const foodItems = [
  "Hamburger",
  "Chicken Pizza",
  "Vegetable Roll",
  "Sea Fish",
  "Fried Chicken",
  "French Fries",
  "Onion Rings",
  "Chicken Nuggets",
  "Tacos Pizza",
  "Hot Dogs",
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-500">FOODKING</h2>
          <p className="text-gray-400 text-sm">
            Temporibus autem quibusdam officiis debitis aut rerum necessitatibus saepe eveniet voluptates...
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <Link href="#"><FaFacebookF className="hover:text-yellow-500" /></Link>
            <Link href="#"><FaTwitter className="hover:text-yellow-500" /></Link>
            <Link href="#"><FaPinterest className="hover:text-yellow-500" /></Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold border-b border-yellow-500 pb-2">Popular Food</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm mt-4">
            {foodItems.map((food, index) => (
              <li
                key={index}
                className="relative pl-6 hover:text-yellow-500 cursor-pointer before:content-[''] before:absolute before:left-0 before:w-3 before:h-3 before:bg-yellow-500 before:text-black before:rounded-full before:flex before:items-center before:justify-center before:text-xs before:font-bold before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                style={{ "--before-content": `"${index + 1}"` } as React.CSSProperties}
              >
                {food}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold border-b border-yellow-500 pb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm mt-4">1403 Washington Ave, New Orleans, LA 70130, United States</p>
          <p className="mt-2 text-yellow-400 font-semibold">
            <a href="mailto:info@example.com">info@example.com</a> | 1718-904-4450
          </p>
          <p className="text-gray-400 text-sm mt-2">Monday - Friday: <span className="text-yellow-400">8am - 4pm</span></p>
          <p className="text-gray-400 text-sm">Saturday: <span className="text-yellow-400">8am - 12am</span></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center container mx-auto px-6 md:px-12">
        <p>&copy; {new Date().getFullYear()} Foodking. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-yellow-500">Privacy Policy</Link>
          <Link href="#" className="hover:text-yellow-500">Terms & Condition</Link>
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
